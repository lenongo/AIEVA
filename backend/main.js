const autoReview = require("./autoReview");
const getNewPullRequestDatas = require("./getGitHubInfo");
const axios = require("axios");

const express = require("express");

const app = express();
const port = 3001;

app.use(express.json());

app.post("/api/data", async (req, res) => {
  try {
    const { data } = req.body;
    const pullRequestDatas = await getNewPullRequestDatas();
    console.log("Data received from React:", pullRequestDatas);
    const reviewResult = await autoReview(pullRequestDatas[0]);
    console.log(reviewResult);

    // 送信するデータは reviewResult をそのまま利用していますが、必要に応じて整形してください。

    // Send a response back to the React frontend
    res.status(200).json({ message: reviewResult });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// HTTPで送信するURL。適切なURLに置き換えてください。
const url = "http://example.com";

async function reviewAndSend(pullRequestData) {
  const reviewResult = await autoReview(pullRequestData);
  console.log(reviewResult);

  // 送信するデータは reviewResult をそのまま利用していますが、必要に応じて整形してください。
  axios
    .post(url, reviewResult)
    .then((response) => {
      console.log(`Status: ${response.status}`);
      console.log("Body: ", response.data);
    })
    .catch((error) => {
      console.error(error);
    });
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
