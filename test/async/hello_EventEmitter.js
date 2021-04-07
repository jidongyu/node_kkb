/*
 * @Description: EventEmitter实现原理
 * @Author: jidongyu
 * @Date: 2021-04-07 15:59:13
 * @LastEditTime: 2021-04-07 16:16:54
 * @LastEditors: jidongyu
 * @Reference: 
 */

class EventEmitter{
    constructor(){
        this.handles={};
    }
    on = (name,callBack) => {
        if(!this.handles){
            this.handles = {};
        }
        if(!this.handles[name]){
            this.handles[name] = [];
        }
        this.handles[name].push(callBack);
    }
    emit = (name,...args) => {
        if(this.handles[name]){
            for(let i=0; i<this.handles[name].length; i++){
                this.handles[name][i](...args);
            }
        }
    }
}

const events = new EventEmitter();
// 事件绑定
events.on('some_event', num => {
    console.log('some_event 事件触发:'+num);
} );
// 事件触发
let n = 0;
setInterval(()=>{
    events.emit('some_event',n++)
},1000)
