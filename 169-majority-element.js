/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var num_s = Array.from(new Set(nums))
    for(let v of num_s){
        if(nums.filter( i => i==v).length*2>=nums.length){
            return v
        }
    }
};
