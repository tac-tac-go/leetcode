/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let count=0;
    while(true){
        for(let i=0;i<tickets.length;i++){
            if(tickets[k]===0){
                return count
            }else if (tickets[i] > 0){
                tickets[i]--;
                count++;
            }
        }
    }
};

