// ダミーのレビュー結果を返す関数
async function autoReview(pullRequestData) {
  const temporaryAccuracy = {
    Comprehensiveness: Math.random() * 10,
    "Code Quality": Math.random() * 10,
    Testing: Math.random() * 10,
    Documentation: Math.random() * 10,
    Performance: Math.random() * 10,
    Security: Math.random() * 10,
    "Error Handling": Math.random() * 10,
    "Size of the Pull Request": Math.random() * 10,
  };

  // 平均精度の計算
  const values = Object.values(temporaryAccuracy);
  const average = values.reduce((a, b) => a + b) / values.length;
  temporaryAccuracy["Average"] = average;

  // 結果のオブジェクトの生成
  const result = {
    walletAddress: null,
    name: pullRequestData.user.login,
    // icon は https://github.com/:user_id.png
    icon: `https:///github.com/${pullRequestData.user.login}.png`,
    message: pullRequestData.message,
    // 'code': pullRequestData.code,
    reply: `AI Reply: Reviewed pull request from ${pullRequestData.user.login}`, // ダミーのAIリプライ
    accuracy: temporaryAccuracy,
    approval: true, // 仮の値
    time: new Date().toISOString(), // 現在のISO8601形式の日時
  };

  return result;
}

module.exports = autoReview;
