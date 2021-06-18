/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.map(v => v.reduce((a,b) => a+b)).reduce((a,b) => Math.max(a,b))
};
