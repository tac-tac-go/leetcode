/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let nums4 = Array.from(new Set(nums1.concat(nums2).concat(nums3)))
    let result=[];
    for(let v of nums4){
        let count=0
        if(nums1.indexOf(v)!=-1){
            count+=1
        }
        if(nums2.indexOf(v)!=-1){
            count+=1
        }
        if(nums3.indexOf(v)!=-1){
            count+=1
        }
        if(count>=2){
            result.push(v)
        }
    }
    return result
};
