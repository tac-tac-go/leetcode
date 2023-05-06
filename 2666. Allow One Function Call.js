/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false
    return function(...args){
        if(!called){
            value = fn.apply(this,arguments)
            called = true;
            return value
        }else{
            return ;
        }
    }
};

