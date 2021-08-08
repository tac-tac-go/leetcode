/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var result = []
    for(let i=0;i<nums1.length;i++){
        var index_l= nums2.indexOf(nums1[i])
        var r_a = nums2.slice(index_l+1)
        
        var flag = false
        for(let j=0;j<r_a.length;j++){
            if(r_a[j]>nums2[index_l]){
                result.push(r_a[j])
                flag=true
                break
            }
        }
        if(!flag){
            result.push(-1)
        }
    }
    return result
};
