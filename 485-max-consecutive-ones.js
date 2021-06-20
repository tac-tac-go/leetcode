/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var result=[]
    var consecutive=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            consecutive+=1
        }else{
            result.push(consecutive)
            consecutive=0
        }
    }
    result.push(consecutive)
    return result.reduce((a,b) => Math.max(a,b))
};
