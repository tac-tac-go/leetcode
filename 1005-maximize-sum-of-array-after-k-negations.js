/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    let nums_minus = nums.filter(v => v<0)
    let nums_plus = nums.filter(v => v>=0)
    nums_minus.sort((a,b) => a-b)
    nums_plus.sort((a,b) => a-b)
    for(let i=0;i<k;i++){
        if(nums_minus.length>0){
            nums_plus.push(nums_minus[0]*-1)
            nums_minus.shift()
            nums_plus.sort((a,b) => a-b)
        }else{
            nums_minus.push(nums_plus[0]*-1)
            nums_plus.shift()
            nums_minus.sort((a,b) => a-b)
        }
    }
    return nums_minus.concat(nums_plus).reduce((a,b) => a+b)
};
