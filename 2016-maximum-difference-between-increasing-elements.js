/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let score = -1
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            let a = nums[i]
            let b = nums[j]
            if(b-a>0){
                if(score<b-a){score=b-a}
            }
        }
    }
    return score
};
