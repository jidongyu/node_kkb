/*
 * @Description: 字节流的使用stream
 * @Author: jidongyu
 * @Date: 2021-05-20 11:47:38
 * @LastEditTime: 2021-05-20 14:40:38
 * @LastEditors: jidongyu
 * @Reference: 
 */
const fs = require("fs");
let count = 0;
fs.writeFile("1.txt",`大家好,我是1.txt文件!${++count}`,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("写入完成");
});
// fs.writeFileSync("2.txt","大家好,我是2.txt文件!");

let resStream = fs.createReadStream('1.txt');
resStream.on("data", chunck => {
    console.log(chunck);
})
resStream.on("data", chunck => {
    console.log(chunck.toString());
})