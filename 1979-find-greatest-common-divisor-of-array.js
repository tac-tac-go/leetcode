/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = nums.reduce((a,b) => Math.min(a,b))
    let max = nums.reduce((a,b) => Math.max(a,b))
    let result=1
    for(let i=2;i<=min;i++){
        if(min%i==0 && max%i==0){
            result=i
        }
    }
    return result
};
