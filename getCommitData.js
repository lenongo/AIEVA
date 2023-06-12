import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// GitHubリポジトリの情報
const repoOwner = "lenongo";
const repoName = "aichat-bot";

// GitHub APIエンドポイント
//const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;

// 最新のコミットを取得する関数
async function getLatestCommit() {
  try {
    const response = await octokit.request(
      `GET /repos/${repoOwner}/${repoName}/pulls/1/files`,
      {
        per_page: 4,
      }
    );

    console.log(response);
    //raw_urlの中にコードが入っている。

    //ブランチへのマージの場合
    // const response = await octokit.request(
    //     `GET /repos/${repoOwner}/${repoName}/branches`,
    //     {
    //       per_page: 2,
    //     }
    //   );
    //   console.log(response.data[0]);

    // if (response.ok) {
    //   // 最新のコミットメッセージを表示
    //   const latestCommit = data[0];
    //   const commitMessage = latestCommit.commit.message;
    //   console.log("最新のコミットメッセージ:", commitMessage);
    // } else {
    //   console.log("エラー:", data.message);
    // }
  } catch (error) {
    console.log("リクエストエラー:", error.message);
  }
}

// 最新のコミットを取得する関数を実行
getLatestCommit();
