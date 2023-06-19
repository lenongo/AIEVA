require("dotenv").config();
const https = require("https");

function chatWithOpenAI(userMessage) {
  const data = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: userMessage },
    ],
  });

  const options = {
    hostname: "api.openai.com",
    path: "/v1/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.OPENAI_API_KEY, // Set your API key as an environment variable
    },
  };

  const req = https.request(options, (res) => {
    let responseBody = "";
    res.on("data", (chunk) => {
      responseBody += chunk;
    });

    res.on("end", () => {
      const jsonResponse = JSON.parse(responseBody);
      const messageContent = jsonResponse.choices[0].message.content;
      console.log(messageContent);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

module.exports = chatWithOpenAI;
