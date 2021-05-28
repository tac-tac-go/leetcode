/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let n_s = String(n).split("").reverse().join("");
    var iteration;
    if(n_s.length%3==0){iteration = n_s.length/3-1}
    else{iteration = Math.floor(n_s.length/3) }
    var count=3
    for(let i=0;i<iteration;i+=1){
        n_s = insertStr(n_s, count, '.')
        count+=4
    }
    n_s = n_s.split("").reverse().join("")
    return n_s
};

function insertStr(str, index, insert) {
    return str.slice(0, index) + insert + str.slice(index, str.length);
}
