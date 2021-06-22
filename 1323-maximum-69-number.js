/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    var result=[]
    for(let i=0;i<String(num).length;i++){
        var num_array = String(num).split("")
        var reverse = num_array[i];
        if(reverse=="9"){reverse=6}
        else{reverse=9}
        num_array[i]=reverse
        result.push(num_array.map(Number).join(""))
    }
    result.push(num)
    return result.reduce((a,b) => Math.max(a,b))
};
