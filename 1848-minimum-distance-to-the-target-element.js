/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let match_index = nums.map((v,i) => v==target ? i+1 : undefined).filter(v => v)
    return match_index.map(v => Math.abs(v-start-1)).reduce((a,b) => Math.min(a,b))
};
