/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var count=numBottles;
    while(numBottles>=numExchange){
        var divide = Math.floor(numBottles/numExchange)
        count +=divide;
        var real = numBottles%numExchange
        numBottles = divide+real; 
    }
    return count
};
