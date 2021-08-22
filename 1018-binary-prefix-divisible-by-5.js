/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let bin = 0
    const res = []
    A = [...nums]
    for (let i = 0; i < A.length; i++) {
        bin = BigInt(bin) * BigInt(2) + BigInt(A[i])
        res[i] = (bin % BigInt(5) == 0)
    }
    return res
};
