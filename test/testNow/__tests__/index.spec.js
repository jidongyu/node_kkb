/*
 * @Description: 
 * @Author: jidongyu
 * @Date: 2021-03-15 11:17:03
 * @LastEditTime: 2021-03-17 11:23:50
 * @LastEditors: jidongyu
 * @Reference: 
 */
test('测试文件生成',()=>{
    const src = new (require('../index'))();
    const res = src.getTestSource('fun','class');
    expect(res).toBe(
        `
        test('TEST fun',()=>{
            const fun = require('../class');
            const res = fun();
            // expect(res).toBe('test return')
        })
        `
    )
})
// test('生成测试文件名',()=>{
//     const TestNow = require('../index');
//     const src = new TestNow();
//     const res = src.getTestFileName('/abc/class.js');
//     console.log(res,'test name');
//     expect(res).toBe('/abc/__tests__/class.spec.js')
// })