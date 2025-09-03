# 使用官方 Node.js 20 的輕量級映像檔作為基礎
FROM node:20-slim

# 在容器內設定工作目錄
WORKDIR /app

# 複製 package.json 和 lock 檔，以便有效利用快取
COPY package*.json ./

# 安裝所有依賴
RUN npm install

# 複製所有專案檔案到工作目錄
COPY . .

# 向外界暴露 8080 連接埠
EXPOSE 8080

# 容器啟動時要執行的指令
CMD [ "npm", "start" ]