/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    var max_v = 0
    for(let i=0;i<nums.length;i++){
        var index=i;
        var result=[nums[i]]
        while(nums[index]<nums[index+1] && index < nums.length){
            result.push(nums[index+1])
            index+=1
        }
        if(max_v < result.length){max_v = result.length}
    }
    return max_v
};
