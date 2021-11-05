/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return compare(S) === compare(T)
};

const compare = (word) => {
    while (word.includes('#')) {
        const index = word.indexOf('#')
        if (index > -1) word = word.substr(0, index-1) + word.slice(index+1)
    }
    return word
}
