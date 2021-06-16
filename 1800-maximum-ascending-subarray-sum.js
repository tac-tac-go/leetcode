/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    var array=[]
    var result=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i+1]){
            result+=nums[i]
        }else{
            result+=nums[i]
            array.push(result)
            result=0
        }
    }
    return array.reduce((a,b) => Math.max(a,b))
};
