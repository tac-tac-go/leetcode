/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var result=[];
    for(let i=1;i<num;i++){
        if(num%i==0){
            result.push(i)
        }
    }
    if(result.length==0){return false}
    return result.reduce((a,b) => a+b)==num ? true : false;
};
