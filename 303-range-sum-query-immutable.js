/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let y = 0;
    this.cumsum = nums.map(v => y+=v)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    console.log(left,right)
    console.log(this.cumsum)
    return this.cumsum[right] - (this.cumsum[left-1] || 0)
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
