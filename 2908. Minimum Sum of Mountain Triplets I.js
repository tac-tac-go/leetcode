/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let minimum = 10**9
    let flag = true
    for(let i =0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<=nums.length;k++){
                if(nums[i]<nums[j] && nums[k]<nums[j]){
                    if(minimum > nums[i]+nums[j]+nums[k]){
                        minimum = nums[i]+nums[j]+nums[k]
                        flag = false
                    }
                }
            }
        }
    }
    return flag ? -1 : minimum
};
