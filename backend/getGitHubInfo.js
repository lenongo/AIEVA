require("dotenv").config();
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
});

const owner = "herring101";
const repo = "DAOWORKS_DEMO";

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

  // プルリクエストの現在の数を保存
  prevPullRequestSize = pullRequestList.data.length;

  return newPullRequests;
}

module.exports = getNewPullRequestDatas;
