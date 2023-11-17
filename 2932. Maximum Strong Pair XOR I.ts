function maximumStrongPairXor(nums: number[]): number {
    let result = [];
    for(let i of nums){
        for(let j of nums){
            if(Math.abs(i-j)<=Math.min(i,j)){
               result.push([i,j])
            }
        }
    }
    return Math.max(...result.map(v => v[0]^v[1]))
};
