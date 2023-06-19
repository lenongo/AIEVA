require("dotenv").config();
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
});

const owner = "herring101";
const repo = "DAOWORKS_DEMO";

// プルリクエストの変更されたファイルの一覧を取得
async function getPullRequestFileChanges(pullRequest) {
  const { data: files } = await octokit.pulls.listFiles({
    owner: owner,
    repo: repo,
    pull_number: pullRequest.number,
  });
  return files;
}

// プルリクエストの本文から関連するIssue番号を抽出
function extractIssueNumbers(body) {
  const regex = /#(\d+)/g;
  let match;
  const issueNumbers = [];

  while ((match = regex.exec(body)) !== null) {
    issueNumbers.push(parseInt(match[1], 10));
  }

  return issueNumbers;
}

// Issue番号からIssueのコメントを取得
async function getIssueComments(issueNumber) {
  const { data: comments } = await octokit.issues.listComments({
    owner: owner,
    repo: repo,
    issue_number: issueNumber,
  });
  return comments;
}

// Issue番号からIssueの詳細を取得
async function getIssueDetails(issueNumber) {
  const { data: issue } = await octokit.issues.get({
    owner: owner,
    repo: repo,
    issue_number: issueNumber,
  });

  // Issueのコメントを取得
  issue.comments = await getIssueComments(issueNumber);

  return issue;
}

// 前回のプルリクエスト数を保存するためのグローバル変数
let prevPullRequestSize = 0;

// プルリクエストの取得
async function getNewPullRequestDatas() {
  let pullRequestList = await octokit.pulls.list({
    owner: owner,
    repo: repo,
  });

  // Sort pull requests in descending order of their creation dates.
  pullRequestList.data.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  // 新規に追加されたプルリクエストだけを取り出す
  let newPullRequests = pullRequestList.data.slice(
    0,
    pullRequestList.data.length - prevPullRequestSize
  );

  // それぞれのプルリクエストについて、変更されたファイルの一覧を取得
  for (let pullRequest of newPullRequests) {
    pullRequest.files = await getPullRequestFileChanges(pullRequest);
    // Pull requestのbodyからissue番号を抽出し、それぞれのissueの詳細を取得
    const issueNumbers = extractIssueNumbers(pullRequest.body);
    pullRequest.issueList = [];
    for (let issueNumber of issueNumbers) {
      const issue = await getIssueDetails(issueNumber);
      pullRequest.issueList.push(issue);
    }
  }

  // プルリクエストの現在の数を保存
  prevPullRequestSize = pullRequestList.data.length;

  return newPullRequests;
}

module.exports = getNewPullRequestDatas;
