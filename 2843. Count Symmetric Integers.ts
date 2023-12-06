function countSymmetricIntegers(low: number, high: number): number {
    let count = 0;
    for(let i=low;i<=high;i++){
        if(String(i).length%2==0){
            let first_half = String(i).slice(0,String(i).length/2).split("").map(Number).reduce((a,b) => a+b)
            let second_half = String(i).slice(String(i).length/2).split("").map(Number).reduce((a,b) => a+b)
            if(first_half == second_half){
                count+=1
            }
        }
    }
    return count
};
