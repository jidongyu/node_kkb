/*
 * @Description: 
 * @Author: jidongyu
 * @Date: 2021-06-02 19:57:43
 * @LastEditTime: 2021-06-02 22:22:12
 * @LastEditors: jidongyu
 * @Reference: 
 */
const http = require("http");
const url = require('url');
const fs = require("fs");

const server = http.createServer((req, res) => {
    // res.setHeader("content-type","text/html;charset=utf-8");
    res.writeHead(300, { "content-type": "text/html;charset=utf-8" });
    let urlObj = url.parse(req.url);
    console.log("urlObj", urlObj);
    if (urlObj.pathname == '/' || urlObj.pathname == '/index') {
        // let fsRes = fs.readFileSync('./index.html');
        // res.end(fsRes);
        let streamRead = fs.createReadStream('./index.html');
        streamRead.pipe(res);
    } else if (urlObj.pathname == '/project') {
        // let fsRes = fs.readFileSync('./project.html');
        // res.end(fsRes);
        let streamRead = fs.createReadStream('./project.html');
        streamRead.pipe(res);
    } else {
        if (urlObj.pathname !== '/favicon.ico') {
            let streamRead = fs.createReadStream('.'+urlObj.pathname);
            streamRead.pipe(res);
        }
    }
})

server.listen(3000);