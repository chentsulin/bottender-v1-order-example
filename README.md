# bottender-v1-order-example

以 [Bottender](https://github.com/Yoctol/bottender) 實作的點餐範例，[「輕鬆揪團不求人！在 LINE 上打造屬於你的 Chatbot 揪團小幫手
」](https://blog.yoctol.com/%E8%BC%95%E9%AC%86%E6%8F%AA%E5%9C%98%E4%B8%8D%E6%B1%82%E4%BA%BA-%E5%9C%A8-line-%E4%B8%8A%E6%89%93%E9%80%A0%E5%B1%AC%E6%96%BC%E4%BD%A0%E7%9A%84-chatbot-%E6%8F%AA%E5%9C%98%E5%B0%8F%E5%B9%AB%E6%89%8B-389641aced82)文章的範例。

## 支援的卡米狗指令

### 開團

```
開團
```

範例：

```
卡米狗學說話;紅茶拿鐵;拿的動嗎?
```

### 下訂單

點自己想要的內容，一人限點一次

```
我要<訂單內容>
```

範例：

```
我要珍奶
```

### 取消

```
取消
```

### 統計

```
統計
```

### 截止

```
截止
```

## Setup

複製並填寫環境變數

```
cp .env.sample .env
```

## NPM Scripts

### npm run dev

會監控修改並重啟 Server，適合開發使用。

### npm start

執行 Bot Server。

## License

MIT © [C. T. Lin](https://github.com/chentsulin/bottender-v1-order-example)
