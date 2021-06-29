/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var result=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            result.push((nums[j]-1)*(nums[i]-1))
        }
    }
    return result.reduce((a,b) => Math.max(a,b))
};
