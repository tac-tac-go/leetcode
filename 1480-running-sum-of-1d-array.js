/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var new_array =[]
    nums.reduce((a,b,i) => { return new_array[i]=a+b},0)
    return new_array;
};

