/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var heights_sort = [...heights]
    heights_sort.sort((a,b) => a-b)
    var count=0
    for(let i=0;i<heights_sort.length;i++){
        if(heights_sort[i]!=heights[i]){
            count+=1
        }
    }
    return count
};
