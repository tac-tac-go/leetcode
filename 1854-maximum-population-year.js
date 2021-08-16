/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let array = new Array(2050-1950+1)
    array.fill(0)
    for(let [val1,val2] of logs){
        for(let i=val1;i<val2;i++){
            array[i-1950]+=1
        }
    }
    let max_val = array.reduce((a,b) => Math.max(a,b))
    return array.map((v,i) => v==max_val ? i+1:undefined).filter(x => x)[0]+1949
    
};
