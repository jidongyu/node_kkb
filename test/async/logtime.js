/*
 * @Description: 
 * @Author: jidongyu
 * @Date: 2021-04-06 15:26:04
 * @LastEditTime: 2021-04-07 15:37:56
 * @LastEditors: jidongyu
 * @Reference: 
 */


const logtime = (name) => {
    console.log('loading...' + name + new Date().toLocaleDateString());
}

exports.callBack = (name) => {
    setTimeout(() => {
        logtime(name);
        setTimeout(() => {
            logtime(name);
        }, 100);
    }, 100)
}

const promise = (name, delay = 100) => {
    return new Promise((resolve, reject) => {
        logtime(name);
        setTimeout(() => {
            resolve();
        }, delay)
    });
};

exports.promise = (name) => {
    promise('promise1')
        .then(promise('promise2'))
        .then(promise('promise3'))
}

// exports.generator = () => {
//     const generator = function* (name){
//         yield promise(name+1);
//         yield promise(name+2);
//         yield promise(name+3);
//     };
//     let co = generator => {
//         if(it = generator.next().value){
//             it.then( res => {
//                 co(generator);
//             } )
//         }else{
//             return false
//         }
//     }
//     co(generator('generator'));
// }

exports.generator = () => {
    const generator = function* (name) {
        yield promise(name + 1)
        yield promise(name + 2)
        yield promise(name + 3)
        yield promise(name + 4)
    }
    let co = generator => {
        let it = null;
        if (it = generator.next().value) {
            it.then(res => {
                co(generator)
            })
        } else {
            return
        }
    }
    co(generator('Co-Generator'))
}

exports.asyncAwait = async () => {
    await promise('Async/Await1 ');
    await promise('Async/Await2 ');
    await promise('Async/Await3 ');
}

exports.event = () => {
    const asyncFunc = name => event => {
        setTimeout( () => {
            logtime(name);
            event.emit('end');
        }, 100 )
        return event;
    }

    const arry = [
        asyncFunc('asyncFunc1'),
        asyncFunc('asyncFunc2'),
        asyncFunc('asyncFunc3')
    ];

    const events = require('events');
    const eventEmitter = new events.EventEmitter();
    let i = 0;
    eventEmitter.on('end', () => i<arry.length && arry[i++](eventEmitter));
    eventEmitter.emit('end');
}