/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set1 = new Set(nums);
    let array1 = Array.from(set1);
    array1.sort((a,b) => {
        if (a > b){
            return -1
        }
        if( a < b ){
            return 1
        }
    });
    return array1.length>=3 ? array1[2] : array1[0]
};
