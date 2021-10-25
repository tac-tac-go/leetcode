/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.indexOf(0)!=-1){return 0}
    if(nums.filter(v => v<0).length%2==0){return 1}
    else{return -1}
};
