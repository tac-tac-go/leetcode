/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    result=-1
    for(let i=0;i<nums.length;i++){
        var a = nums.slice(0,i).length>0 ? nums.slice(0,i).reduce((a,b) => a+b) :0;
        var b = nums.slice(i+1).length>0 ? nums.slice(i+1).reduce((a,b) => a+b):0;
        if(a==b){
            result=i
            break
        }
    }
    return result
};
