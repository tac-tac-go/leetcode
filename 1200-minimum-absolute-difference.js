/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    var arr_sort = [...arr]
    arr_sort.sort((a,b) => a-b)
    var result_min=[]
    for(let i=0;i<arr_sort.length-1;i++){
        result_min.push(Math.abs(arr_sort[i]-arr_sort[i+1]))
    }
    var min_val = result_min.reduce((a,b) => Math.min(a,b))
    var result=[];
    for(let i=0;i<arr_sort.length-1;i++){
        if(Math.abs(arr_sort[i+1]-arr_sort[i])==min_val){
            result.push([arr_sort[i],arr_sort[i+1]])
        }
    }
    return result
};
