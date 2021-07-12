/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var result = []
    var duplicate = Array.from(new Set(nums.filter(v => nums.indexOf(v)!==nums.lastIndexOf(v))));
    result.push(duplicate)
    
    for(let i=1;i<=nums.length;i++){
        if(nums.indexOf(i)===-1){
            result.push(i)
        }
    }
    
    return result;
};
