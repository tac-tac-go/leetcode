/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let result = []
    for(let v of ops){
        if(!isNaN(v)){
            result.push(Number(v))  
        }else if(v=="C"){
            result.pop()
        }else if(v=="D"){
            result.push(result.slice(-1)[0]*2)
        }else{
            result.push(result.slice(-1)[0]+result.slice(-2)[0])
        }
    }
    return result.reduce((a,b) => a+b)
};
