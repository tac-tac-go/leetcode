/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result =[];
    for(let i=0;i<nums.length;i++){
        result.push(nums.slice(0,i).concat(nums.slice(i+1)).filter( v => {
            return v<nums[i];
        }).length);
    }
    return result;
};
