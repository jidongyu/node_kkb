/*
 * @Description: function*——yield 表示的generator迭代函数
 * @Author: jidongyu
 * @Date: 2021-04-06 18:46:00
 * @LastEditTime: 2021-04-06 19:11:37
 * @LastEditors: jidongyu
 * @Reference: 
 */

function* func() {
    console.log("one");
    yield '1';
    console.log("two");
    yield '2';
    console.log("three");
    return '3';
}
// function* func() {
//     console.log("one");
//     yield '1';
//     console.log("two");
//     yield '2';
//     console.log("three");
//     return '3'; }

const fn = func();
console.log('func(): ', JSON.stringify(fn, null, 4));
console.log('func().next(): ', JSON.stringify(fn.next(), null, 4));
console.log('next: ', fn.next());

for(const [key, value] of func()) {
    console.log(`${key}: ${value}`);
}