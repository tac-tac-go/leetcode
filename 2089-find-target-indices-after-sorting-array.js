/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b) => a-b)
    let result=[]
    for(let [i,v] of nums.entries()){
        if(v==target){
            result.push(i)
        }
    }
    return result
};
