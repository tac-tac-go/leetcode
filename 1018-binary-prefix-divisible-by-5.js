/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
let prefixesDivBy5 = function(nums) {
    let bin = 0
    const res = []
    let A = [...nums]
    for (let i = 0; i < A.length; i++) {
        bin = BigInt(bin) * BigInt(2) + BigInt(A[i])
        res[i] = (bin % BigInt(5) == 0)
    }
    return res
};
