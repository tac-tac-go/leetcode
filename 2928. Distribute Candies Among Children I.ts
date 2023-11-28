function distributeCandies(n: number, limit: number): number {
    let count = 0;
    let result = []
    for(let i =0;i<=limit;i++){
        for(let j=0;j<=limit;j++){
            for(let k=0;k<=limit;k++){
                let sum = [i,j,k].reduce((a,b) => a+b)
                if(sum==n){
                    count +=1
                    result.push([i,j,k])
                }
            }
        }
    }
    return count
};
