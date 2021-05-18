/*
 * @Author: your name
 * @Date: 2021-05-17 11:45:24
 * @LastEditTime: 2021-05-19 00:44:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\node_test\node_kkb\高级课程练习\文件file\index.js
 */

const fs = require("fs");

/* 
   写入文件
   file.writeFile(文件名,写入内容,{flag:"w"|"a"|"r"},(error)=>{
       if(error){
           console.log(error);
       }
       console.log("写入成功！");
   })
   flag:
       a: 追加写入
       w: 覆盖写入
       r: 读取  
    如果写入的文件不存在的话会先创建文件
 */
// fs.writeFile("write.txt", "，追加写入测试111", { flag: "a" }, (error) => {
//     if (error) {
//         console.log("error：", error);
//     }
//     console.log("写入成功");
// })

/*
   读入
   fs.readFile(文件名,读取编码,(error,data)=>{
       if(error){
           console.log("error：",error);
       }
       console.log(data);
       // 如果不添加第二个参数的话,node会默认读取的是buffer类型数据——一种node提供的二进制数据,
          要想转换为正常字符串，只需要data.toString()就行
   }) 
 */
// fs.readFile("write.txt", (error, data) => {
//     if (error) {
//         console.log("error：", error);
//     }
//     const res = data.toString();
//     console.log(res);
// })

/*  
    fs.wirteSync(文件名);
    fs.readSync(文件名);
    表示异步读写操作
    const res = fs.readSync("write.txt");
    console.log(res.toString());
 */
// 删除文件
// fs.unlink("write.js", (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("删除成功！")
// })

// 创建文件夹
// fs.mkdir("22", (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("文件夹创建成功!");
// })

// 读取文件夹
// fs.readdir("11", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })

// 删除文件夹
// fs.rmdir("22", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("删除目录成功！");
// })

// 判断文件夹是否存在
// fs.exists("11", (exists) => {

//     console.log(exists);
// })

// 获取文件或者文件夹信息
fs.stat('write.txt', (err, stat) => {
    if (err) {
        console.log(err);
    }
    // console.log(stat);
    // let res = stat.isFile();
    let res = stat.isDirectory();
    console.log(res);
})