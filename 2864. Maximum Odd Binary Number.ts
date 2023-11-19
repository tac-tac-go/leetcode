function maximumOddBinaryNumber(s: string): string {
    let one_count = s.match(/1/g).length
    return "1".repeat(one_count-1).padEnd(s.length-1,"0")+"1"
};
