/*
 * @Description: 
 * @Author: jidongyu
 * @Date: 2021-04-02 18:41:52
 * @LastEditTime: 2021-04-02 19:17:24
 * @LastEditors: jidongyu
 * @Reference: 
 */
const fs = require('fs');

fs.readdir( './test/testNow/__tests__',(err, files) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(files,'files');
} )