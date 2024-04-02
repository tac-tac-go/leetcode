/**
 * @param {number[]} stones
 * @return {number}
 */
let lastStoneWeight = function(stones) {
    stones.sort((a,b) => b-a)
    
    while(stones.length>1){
        console.log(stones)
        if(stones[0]>stones[1]){
            stones.push(stones[0]-stones[1])
            stones = stones.slice(2)
        }else{
            stones = stones.slice(2)
        }
        stones.sort((a,b) => b-a)
        
    }
    return stones
};
