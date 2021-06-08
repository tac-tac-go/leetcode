/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max = candies.reduce((a,b) => Math.max(a,b))
    return candies.map(v => v + extraCandies >=max)
};
