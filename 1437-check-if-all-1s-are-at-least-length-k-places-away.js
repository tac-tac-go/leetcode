/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    var result=[]
    for(let i=0;i<nums.length;i++){
      if(nums[i]==1){
          result.push(i)
      }
    }
    var result2=[]
    for(let i=0;i<result.length-1;i++){
        result2.push(result[i+1]-result[i]-1)
    }
    var k_filter = result2.filter(v => v < k)
    return k_filter.length>0 ? false : true;
};
