/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => {
        if(a<b){ return -1 }
        if(a>b){ return 1 }
        return 0
    })
    
    for(let i=nums.length-3;i>=0;i--){
        if(nums[i]+nums[i+1] >nums[i+2]){
            return nums[i]+nums[i+1]+nums[i+2]
        }
    }
    return 0
};
