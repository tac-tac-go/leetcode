/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    var result=[]
    if(n!=1){
        for(let i=1;i<n;i++){
            result.push(i)
        }
        result.push(-result.reduce((a,b) => a+b))
        return result
    }else{
        return [0]
    }   
};
