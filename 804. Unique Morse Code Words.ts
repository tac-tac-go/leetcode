let alpha_arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

let alphabet = "abcdefghijklmnopqrstuvwxyz"

function uniqueMorseRepresentations(words: string[]): number {
    return Array.from(new Set(words.map( i=> i.split("").map(v =>alpha_arr[alphabet.indexOf(v)]).join("")))).length
};
