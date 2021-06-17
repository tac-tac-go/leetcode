/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var array = new Array(s.length);
    array.fill(0);
    for(let i=0;i<s.length;i++){
        array[indices[i]]=s[i]
    }
    return array.join("")
};
