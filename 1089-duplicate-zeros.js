/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
    let arr_s = [...arr]
    let count=0
    for(const [index,elm] of arr_s.entries()){
        if(elm==0){
            arr.splice(index+count,0,0)
            count+=1
        }else if(index>arr_s.length){
            break
        }
    }
    const val = arr.splice(arr_s.length);
    return val
};
