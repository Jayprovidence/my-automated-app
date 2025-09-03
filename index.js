const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('版本 4：自動化部署成功！CI/CD 管道正常運作！');
});
app.listen(port, () => {
  console.log(`應用程式正在監聽 port ${port}`);
});