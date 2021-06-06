/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    var array = new Array(gain.length+1)
    array.fill(0)
    
    for(let i=1;i<array.length;i++){
        array[i]=gain[i-1]+array[i-1]
    }
    return array.reduce((a,b) => Math.max(a,b))
};
