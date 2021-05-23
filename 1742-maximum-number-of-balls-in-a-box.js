/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let result = new Array(highLimit);
    result.fill(0);
    for(let i=lowLimit;i<=highLimit;i++){
        var index = String(i).split("").map(Number).reduce((a,b) => {
            return a+b;
        });
        result[index-1]+=1
    }
    return result.reduce((a,b) => Math.max(a,b))
};
