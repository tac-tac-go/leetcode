function splitWordsBySeparator(words: string[], separator: string): string[] {
    return words.map(s => s.split(`${separator}`).filter(v => v.length > 0)).flat()
};
