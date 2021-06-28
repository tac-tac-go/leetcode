/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    var min_val =10**5
    var sum = 0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(sum<min_val){
            min_val=sum
        }
    }
    return min_val>0 ? 1 : -min_val+1;
};
