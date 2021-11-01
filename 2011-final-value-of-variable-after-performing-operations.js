/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X=0;
    for(let v of operations){
        if(v=="X++" || v=="++X"){
            X+=1
        }else{
            X-=1
        }
    }
    return X
};
