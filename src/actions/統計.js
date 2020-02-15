module.exports = async function 統計(context) {
  const sortedOrders = context.state.訂單
    // 按照文字排序
    .sort((a, b) => a.order.localeCompare(b.order))
    .reduce((acc, curr) => {
      const { name, order } = curr;
      // 檢查有沒有人點過一樣的東西
      const match = Object.keys(acc).find(key => order === key);
      if (match) {
        // 有人的話就把名字接在 array 後面
        return {
          ...acc,
          [order]: acc[order].concat(name),
        };
      }
      // 或者新開 array
      return { ...acc, [order]: [name] };
    }, {});

  const orderNames = Object.keys(sortedOrders);

  // 稍微排版一下，一行一種物品
  const result = orderNames
    .map(
      name =>
        `${name} 有 ${sortedOrders[name].length} 份，是 ${sortedOrders[
          name
        ].join(', ')} 點的`
    )
    .join('\n');

  // 避免沒有訂單傳送空字串出現錯誤
  await context.sendText(result || '沒有訂單QQ');
};
