/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
let distanceBetweenBusStops = function(distance, start, destination) {
    let start1 = Math.min(start,destination)
    let destination1 = Math.max(start,destination)
    let anticlock = distance.concat(distance)
    let value1 = 0
    
    for(let i=start1;i<destination1;i++){
        value1+=anticlock[i]
    }
    let value2=0
    for(let j=start1+distance.length-1;j>=destination1;j--){
        value2+=anticlock[j]
    }
    return Math.min(value1,value2)

};
