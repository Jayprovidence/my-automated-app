const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('版本 1：專案初始化成功！');
});

app.listen(port, () => {
  console.log(`應用程式正在監聽 port ${port}`);
});