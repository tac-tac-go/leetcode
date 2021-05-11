/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var a = num.toString(2).split("");
    var b = a.map(v => {
        return v=="0"? "1": "0";
    })
    var c = parseInt(b.join(""), 2);
    return c;
    
};
