require("dotenv").config();
const https = require("https");

// 複数行の文字列
const systemPrompt = `You are a expert of programmer.
You will be given the following information
- File Changes
- Pull request title, body
- Issue title, comments
Each may be too long or omitted, but consider it a good guess.

Please review the provided code according to the following key points: assess its overall design and integration with the system, verify functionality and consider edge cases, evaluate code complexity, check the appropriateness and effectiveness of tests, examine naming conventions, assess the clarity and necessity of comments, ensure the code style is consistent, verify updated or necessary documentation, review every line of code, consider the broader context of changes, and remember to give constructive feedback, appreciating good practices.

Here are some metrics you can use to evaluate the quality of a pull request:
Please rate each Metric on a scale of 1 to 10, giving reasons. Please rate 10 for those that do not need to be rated.

Comprehensiveness: Does the pull request address all the issues mentioned in the task? Does it include all necessary changes such as code changes, tests, and documentation updates?
Code Quality: Does the code adhere to coding standards and style guides? Is the code clear, concise, and maintainable? Are the variables, methods, and classes appropriately named?
Testing: Are there sufficient tests for the changes? Do the tests cover edge cases and failure modes? Do the tests pass?
Documentation: Is the documentation updated and accurate? Are changes in the codebase correctly reflected in the documentation? Are the comments in the code clear and helpful?
Performance: Does the pull request introduce performance improvements or does it degrade performance? Have potential performance issues been considered and addressed?
Security: Does the pull request introduce any security vulnerabilities or does it improve security? Are there potential security risks that need to be addressed?
Error Handling: How does the code handle potential errors? Are the error messages clear and helpful?
Size of the Pull Request: Is the pull request small and focused? Large pull requests can be difficult to review thoroughly and are more likely to introduce bugs.`;

async function chatWithOpenAI(messages) {
  const data = JSON.stringify({
    model: "gpt-3.5-turbo-16k",
    messages: messages,
  });

  const options = {
    hostname: "api.openai.com",
    path: "/v1/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.OPENAI_API_KEY, // APIキーを環境変数として設定してください
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseBody = "";
      res.on("data", (chunk) => {
        responseBody += chunk;
      });

      res.on("end", () => {
        const jsonResponse = JSON.parse(responseBody);
        resolve(jsonResponse);
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

async function functionCallWithOpenAI(messages) {
  const data = JSON.stringify({
    model: "gpt-3.5-turbo-16k",
    messages: messages,
    functions: [
      {
        name: "autoReview",
        description: "Review and automatic evaluation by AI",
        parameters: {
          type: "object",
          properties: {
            reply: {
              type: "string",
              description: "AI Review. about 300 words.",
            },
            Comprehensiveness: {
              type: "integer",
              description: "Comprehensivenes(1-10)",
            },
            CodeQuality: {
              type: "integer",
              description: "CodeQuality(1-10)",
            },
            Testing: {
              type: "integer",
              description: "Testing(1-10)",
            },
            Documentation: {
              type: "integer",
              description: "Documentation(1-10)",
            },
            Performance: {
              type: "integer",
              description: "Performance(1-10)",
            },
            Security: {
              type: "integer",
              description: "Security(1-10)",
            },
            ErrorHandling: {
              type: "integer",
              description: "ErrorHandling(1-10)",
            },
            Size: {
              type: "integer",
              description: "Size(1-10)",
            },
          },
          required: [
            "reply",
            "Comprehensiveness",
            "CodeQuality",
            "Testing",
            "Documentation",
            "Performance",
            "Security",
            "ErrorHandling",
            "Size",
          ],
        },
        function_call: { name: "autoReview" },
      },
    ],
  });

  const options = {
    hostname: "api.openai.com",
    path: "/v1/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.OPENAI_API_KEY, // APIキーを環境変数として設定してください
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseBody = "";
      res.on("data", (chunk) => {
        responseBody += chunk;
      });

      res.on("end", () => {
        const jsonResponse = JSON.parse(responseBody);
        resolve(jsonResponse);
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}
// Description: プルリクエストの内容を解析し、レビュー結果を返す関数を定義する

// File Changesの文字列を生成する関数
async function getFileChangesString(pullRequest) {
  let fileChangesString = "# File Changes\n";
  pullRequest.files.forEach((file) => {
    fileChangesString += `filename:${file.filename}\n`;
    fileChangesString += `status:${file.status}\n`;
    fileChangesString += `additions:${file.additions}\n`;
    fileChangesString += `deletions:${file.deletions}\n`;
    fileChangesString += `changes:${file.changes}\n`;
    if (file.patch) {
      fileChangesString += `patch:${file.patch}\n`;
    }
    fileChangesString += "\n";
  });
  return fileChangesString;
}

// Pull Request の title, bodyの文字列を生成する関数
async function getPullRequestString(pullRequest) {
  let pullRequestString = "# Pull Request\n";
  pullRequestString += `title:${pullRequest.title}\n`;
  pullRequestString += `body:${pullRequest.body}\n`;
  pullRequestString += "\n";
  return pullRequestString;
}

// Issueの文字列を生成する関数
async function getIssueString(pullRequest) {
  let issueString = "# Issue\n";
  pullRequest.issueList.forEach((issue) => {
    issueString += `title:${issue.title}\n`;
    issueString += `body:${issue.body}\n`;
    issue.comments.forEach((comment) => {
      issueString += `comment:${comment.body}\n`;
    });
    issueString += "\n";
  });
  return issueString;
}

async function autoReview(pullRequestData) {
  const fileChangesString = await getFileChangesString(pullRequestData);
  const pullRequestString = await getPullRequestString(pullRequestData);
  const issueString = await getIssueString(pullRequestData);
  let messages = [
    { role: "system", content: systemPrompt },
    {
      role: "user",
      content: fileChangesString + pullRequestString + issueString,
    },
  ];
  response = await chatWithOpenAI(messages);
  console.log(response.choices[0]);
  messages.push({
    role: "assistant",
    content: response.choices[0].message.content,
  });
  while (response.choices[0].finish_reason !== "stop") {
    response = await chatWithOpenAI(messages);
    console.log(response.choices[0]);
    messages.push({
      role: "assistant",
      content: response.choices[0].message.content,
    });
  }
  response = await functionCallWithOpenAI(messages);
  review = response.choices[0].message.function_call.arguments;
  review = JSON.parse(review);
  console.log(review);

  const temporaryAccuracy = {
    Comprehensiveness: review.Comprehensiveness,
    CodeQuality: review.CodeQuality,
    Testing: review.Testing,
    Documentation: review.Documentation,
    Performance: review.Performance,
    Security: review.Security,
    ErrorHandling: review.ErrorHandling,
    Size: review.Size,
  };

  // 平均精度の計算
  const values = Object.values(temporaryAccuracy);
  const average = values.reduce((a, b) => a + b) / values.length;
  temporaryAccuracy["Average"] = average;

  // 結果のオブジェクトの生成
  const result = {
    walletAddress: null,
    name: pullRequestData.user.login,
    icon: pullRequestData.user.avatar_url,
    title: pullRequestData.title,
    message: pullRequestData.body,
    reply: review.reply,
    accuracy: temporaryAccuracy,
    approval: true,
    time: new Date().toISOString(), // 現在のISO8601形式の日時
  };

  return result;
}

module.exports = autoReview;
