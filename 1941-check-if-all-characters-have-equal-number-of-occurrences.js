/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    var freq = new Array(26)
    freq.fill(0)
    var first = "a", last = "z";
    var alphabet = [];
    for(var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
        alphabet.push(eval("String.fromCharCode(" + i + ")"))
    }
    
    var s_split = s.split("");
    for(let i=0;i<s_split.length;i++){
        freq[alphabet.indexOf(s_split[i])]+=1;
    }
    freq = freq.filter(v => v!==0)
    return Array.from(new Set(freq)).length==1 ? true : false;
};
