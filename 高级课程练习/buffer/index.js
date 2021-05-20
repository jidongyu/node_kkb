/*
 * @Description: Buffer练习
 * @Author: jidongyu
 * @Date: 2021-05-19 22:19:36
 * @LastEditTime: 2021-05-19 22:41:07
 * @LastEditors: jidongyu
 * @Reference: 
 */
let buffer = Buffer.alloc(10);
console.log(buffer); // <Buffer 00 00 00 00 00 00 00 00 00 00>

let buffer2 = Buffer.from("大家好");
console.log("buffer2：",buffer2) // <Buffer e5 a4 a7 e5 ae b6 e5 a5 bd>

let buffer3 = Buffer.from([0xe5, 0xa4, 0xa7, 0xe5, 0xae, 0xb6, 0xe5, 0xa5, 0xbd]);
console.log("buffer3：",buffer3.toString());

// let bf1 = Buffer.from([0xe5, 0xa4, 0xa7, 0xe5]);
// let bf2 = Buffer.from([0xae, 0xb6, 0xe5, 0xa5, 0xbd]);
// console.log("bf1:",bf1.toString())
// console.log("bf2:",bf2.toString())
let bf1 = Buffer.from([0xe5, 0xa4, 0xa7, 0xe5]);
let bf2 = Buffer.from([0xae, 0xb6, 0xe5, 0xa5, 0xbd]);
let newBuffer = Buffer.concat([bf1,bf2]);
console.log("Buffer.concat(bf1,bf2):",newBuffer);

let {StringDecoder} = require("string_decoder");

let decoder = new StringDecoder();
let str1 = decoder.write(bf1);
let str2 = decoder.write(bf2);
console.log(str1+str2);