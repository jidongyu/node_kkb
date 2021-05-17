/*
 * @Author: your name
 * @Date: 2021-05-16 22:17:41
 * @LastEditTime: 2021-05-16 22:25:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \node\node_test\node_kkb\高级课程练习\服务端与客户端\http.js
 */
const http = require("http");
const server = http.createServer((req, res) => {
    res.write("hello word");
    res.end();
});

server.listen(3000, () => {
    console.log("结束了");
})