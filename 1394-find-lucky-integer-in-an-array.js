/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    var counts = {};
    for(let i=0;i<arr.length;i++){
        var key = arr[i];
        counts[key]= (counts[key])? counts[key]+1 : 1;
    }
    let value=[-1]
    for (let key in counts) {
        console.log(key,counts[key]);
        if (key==counts[key]){
           value.push(Number(key));
        }
    }
    return Math.max(...value);
    
};
