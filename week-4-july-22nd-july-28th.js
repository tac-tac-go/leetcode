/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    for(let i=1;i<nums.length;i++){
        var max = nums.slice(0,i).reduce((a,b) => Math.max(a,b))
        var min = nums.slice(i).reduce((a,b) => Math.min(a,b))
        if(max<=min){
            return nums.slice(0,i).length
        }
    }
};
