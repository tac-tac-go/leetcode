/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) =>{
        if(a<b) return -1;
        if(a>b) return 1;
        return 0;
    })
    
    var diff = Math.abs(arr[1]-arr[0]);
    for(let i=1;i<arr.length-1;i++){
        if(Math.abs(arr[i+1]-arr[i])==diff){}
        else{return false}
    }
    return true;
};
