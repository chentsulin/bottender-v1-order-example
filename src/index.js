const { router, text } = require('bottender/router');

const 開團 = require('./actions/開團');
const 截止 = require('./actions/截止');
const 統計 = require('./actions/統計');
const 取消 = require('./actions/取消');
const 下訂單 = require('./actions/下訂單');

// 沒開團的狀態下，輸入「開團」可以開團
async function 未開團() {
  return router([text('開團', 開團)]);
}
// 已開團的狀態下，有四種指令可以用
async function 開團中() {
  return router([
    text('截止', 截止),
    text('統計', 統計),
    text('取消', 取消),
    text(/^我也?要(?<order>.*)/, 下訂單),
  ]);
}
// 按照 state 決定現在的狀態要用哪個 action
module.exports = async function App(context) {
  if (context.state.開團中) {
    return 開團中;
  }
  return 未開團;
};
