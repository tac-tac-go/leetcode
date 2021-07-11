/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var word = pattern.split("")
    var alpha = Array.from(new Set([...word]))
    var s_w = s.split(" ")
    if(word.length!=s_w.length){return false}
    for(const w of alpha){
        var indexes = [];
        word.forEach((el,i) => {
            el === w && indexes.push(i);
        })
        var word_match = [];
        for(let index of indexes){
            word_match.push(s_w[index])
        }
        if(Array.from(new Set(word_match)).length!==1){return false}
    }
    var s_w_set = Array.from(new Set([...s_w]))
    return alpha.length==s_w_set.length ? true : false;
};


