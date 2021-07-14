/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    var no_duplicate = Array.from(new Set(arr));
    var result= [];
    for(const [index,value] of no_duplicate.entries()){
        if((arr.filter(v => v==value).length/arr.length)>0.25){
            return no_duplicate[index]
        }
    }
};
