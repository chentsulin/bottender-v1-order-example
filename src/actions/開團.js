module.exports = async function 開團(context) {
  const user = await context.getUserProfile();

  // 設定為開團 state
  context.setState({
    開團中: true,
    開團人: user,
    訂單: [],
  });

  await context.sendText(`${user.displayName} 開團囉! 大家快來點!`);
};
