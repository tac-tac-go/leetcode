/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    var alphabet = Range('a', 'z');
    var sentence = sentence.split("")
    var count = new Array(26);
    count.fill(0)
    for(let i=0;i<sentence.length;i++){
        count[alphabet.indexOf(sentence[i])]+=1
    }
    return count.reduce((a,b) => Math.min(a,b))>0 ? true : false
};

function Range(first, last) {
	var first = first.charCodeAt(0);
	var last = last.charCodeAt(0);
	var result = new Array();
	for(var i = first; i <= last; i++) {
            result.push(String.fromCodePoint(i));
	}
	return result;
}
