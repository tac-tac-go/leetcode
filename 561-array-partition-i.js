/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b)
    var sum=0
    for(let i=0;i<nums.length;i+=2){
        sum+=nums.slice(i,i+2).reduce((a,b) => Math.min(a,b))
    }
    return sum
};
