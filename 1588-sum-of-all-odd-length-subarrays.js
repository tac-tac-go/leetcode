/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    var sum=0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<=arr.length;j+=2){
            sum+=arr.slice(i,j).reduce((a,b) => a+b)
        }
    }
    return sum
};
