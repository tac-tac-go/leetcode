/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    var flag=true
    var step=1;
    while(flag){
        var x = n-step;
        var y = step
        if(String(x).split("").indexOf("0")==-1 && String(y).split("").indexOf("0")==-1){
            return [x,y]
        }else{
            step+=1
        }
    }
};
