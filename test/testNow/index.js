/*
 * @Description: 自动生成文件名
 * @Author: jidongyu
 * @Date: 2021-03-15 11:03:43
 * @LastEditTime: 2021-03-17 11:11:59
 * @LastEditors: jidongyu
 * @Reference: 
 */

const path = require('path');

module.exports = class TextNow{
    getTestSource(methodName, classFile, isClass=false){
        return `
           test('TEST '${methodName},()=>{
               const ${isClass ? '{'+ methodName +'}' : methodName } = require('../${classFile}');
               const res = ${methodName}();
               // expect(res).toEe('test return')
           })
        `
    }
    getTestFileName(fileName){
        const dirname = path.dirname(fileName);
        const basename = path.basename(fileName);
        const extname = path.extname(fileName);
        const resname = basename.replace(extname,`.spec${extname}`);
        return path.format({
            root: dirname + '/__tests__/',
            base: resname
        });
    }
}