function findWordsContaining(words: string[], x: string) : number[] {
    return words.map((v,i) => v.indexOf(x)!==-1 ? i : undefined).filter(v => v || v==0)
};
