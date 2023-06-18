require("dotenv").config();
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: GITHUB_PAT,
});

const owner = "herring101";
const repo = "DAOWORKS_DEMO";

// プルリクエストの取得
octokit.pulls
  .list({
    owner: owner,
    repo: repo,
  })
  .then(({ data }) => {
    console.log(data);
  });

// issueの取得
octokit.issues
  .listForRepo({
    owner: owner,
    repo: repo,
  })
  .then(({ data }) => {
    console.log(data);
  });

octokit.issues
  .listComments({
    owner: owner,
    repo: repo,
    issue_number: 1,
  })
  .then(({ data }) => {
    console.log(data);
  });
