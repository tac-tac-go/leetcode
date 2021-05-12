/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    letters.push(target);
    letters.sort();
    var array = Array.from(new Set(letters));
    let index = array.indexOf(target);
    return index+1== array.length ? array[0] :  array[index+1];
};
