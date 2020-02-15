module.exports = async function 取消(context) {
  const { userId, displayName } = await context.getUserProfile();

  // 檢查訂單裡面有沒有這個人點過的東西
  if (context.state.訂單.some(obj => obj.userId === userId)) {
    // 取消就是把訂單裡面這個人的東西過濾掉
    context.setState({
      ...context.state,
      訂單: context.state.訂單.filter(order => order.userId !== userId),
    });

    await context.sendText(`${displayName} 幫你取消囉!`);
  } else {
    await context.sendText(
      `${displayName} 你沒點過無法取消，輸入「我要ooo」來下訂單`
    );
  }
};
