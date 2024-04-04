/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = function(candies, num_people) {
    let index=0;
    let count=0;
    let result = new Array(num_people).fill(0)
    while(candies>count){
        if(index+1>=candies-count){
            result[index%num_people]+=candies-count
            break   
        }else{
            result[index%num_people]+=index+1
            index+=1
            count+=index
        }
    }
    return result
};
