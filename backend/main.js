const autoReview = require("./autoReview");
const getNewPullRequestDatas = require("./getGitHubInfo");
const axios = require("axios");

// HTTPで送信するURL。適切なURLに置き換えてください。
const url = "http://example.com";

async function reviewAndSend(pullRequestData) {
  const reviewResult = await autoReview(pullRequestData);
  console.log(reviewResult);

  // 送信するデータは reviewResult をそのまま利用していますが、必要に応じて整形してください。
  // axios
  //   .post(url, reviewResult)
  //   .then((response) => {
  //     console.log(`Status: ${response.status}`);
  //     console.log("Body: ", response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
}

async function processPullRequests() {
  console.log("processPullRequests");
  const pullRequestDatas = await getNewPullRequestDatas();
  console.log("getNewPullRequestDatas");
  // console.log(pullRequestDatas);
  for (const pullRequestData of pullRequestDatas) {
    await reviewAndSend(pullRequestData);
  }

  setTimeout(processPullRequests, 5000);
}
// 5秒ごとにPull Requestのデータを取得し、それぞれに対してレビューと送信の処理を行います。
processPullRequests();
