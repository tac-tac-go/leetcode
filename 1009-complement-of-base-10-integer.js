/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    two_n = N.toString(2).split("");
    two_n_r = two_n.map(n => n==1 ? 0 : 1).join('');
    return parseInt(two_n_r,2);
};
