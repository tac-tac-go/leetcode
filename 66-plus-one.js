/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = String(BigInt(digits.join(""))+BigInt(1))
    return digits.split("")
};
