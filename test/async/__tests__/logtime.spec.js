/*
 * @Description: logtime的测试
 * @Author: jidongyu
 * @Date: 2021-04-06 15:32:03
 * @LastEditTime: 2021-04-07 15:38:36
 * @LastEditors: jidongyu
 * @Reference: 
 */



// test('logtime test', done => {
//     const {callBack} = require('../logtime');
//     callBack('logtime test');
//     setTimeout(()=>{
//         done();
//     },1000)
// } )

// test('promis test', done => {
//     const {promise} = require('../logtime');
//     promise();
//     setTimeout(()=>{
//         done();
//     },1000)
// } )

// test('generator test', done => {
//     const {generator} = require('../logtime');
//     generator();
//     setTimeout(()=>{
//         done();
//     },1000)
// } )

// test('event test', done => {
//     const {event} = require('../logtime');
//     event();
//     setTimeout(done,1000)
// } )

test('ayncAwait test', done => {
    const {asyncAwait} = require('../logtime');
    asyncAwait();
    setTimeout(done,1000)
} )