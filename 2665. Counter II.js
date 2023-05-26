/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// let increment = (num) => {return num+1}
// let decrement = (num) => {return num-1}
// let reset = (num) => {return num}

let createCounter = function(init) {
    let value = init
    return {increment:() => ++value,decrement:() => --value,reset:() => value = init}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
