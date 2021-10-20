/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let array = new Array(n).fill(0)
    for(let [a,b] of trust){
        array[a-1]+=1
    }
    if(array.filter(v => v==0).length!=1){return -1}
    let judge_i = array.indexOf(0)+1
    let result=new Array(n).fill(0)
    for(let [a,b] of trust){
        if(b==judge_i){
            result[a-1]+=1
        }
    }
    if(result.filter(v => v==0).length!=1){return -1}
    return judge_i
    
};
