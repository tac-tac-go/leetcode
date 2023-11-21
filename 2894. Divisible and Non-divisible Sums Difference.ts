function differenceOfSums(n: number, m: number): number {
    let arr = [...Array(n).keys()].map(v => v+1)
    let num1 = arr.filter( v => v%m!=0).reduce((a,b) => a+b,0)
    let num2 = arr.filter( v => v%m==0).reduce((a,b) => a+b,0)
    return num1 - num2
};
