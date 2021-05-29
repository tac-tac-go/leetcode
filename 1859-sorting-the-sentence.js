/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    s = s.split(" ").map( v => v.slice(-1).concat(v.slice(0,-1)))
    s.sort()
    s = s.map( v => v.slice(1))
    return s.join(" ")
};
