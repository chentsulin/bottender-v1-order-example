module.exports = async function 截止(context) {
  const { userId, displayName } = await context.getUserProfile();

  // 判斷說出截止指令的人是不是開團的人
  if (context.state.開團人.userId === userId) {
    // 把 state 重設
    context.resetState();

    await context.sendText('截止囉!');
  } else {
    await context.sendText(`${displayName} 不是你開的團，不讓你截止`);
  }
};
