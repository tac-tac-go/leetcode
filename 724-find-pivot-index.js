/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.slice(1).reduce((a,b) => a+b) ==0){return 0}
    for(let i=1;i<nums.length-1;i++){
        var left_sum = nums.slice(0,i).reduce((a,b) => a+b)
        var right_sum = nums.slice(i+1).reduce((a,b) => a+b)
        if(left_sum==right_sum){return i}
    }
    if(nums.slice(0,nums.length-1).reduce((a,b) => a+b) ==0){return nums.length-1}
    return -1
};
