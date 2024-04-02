/**
 * @param {number[]} heights
 * @return {number}
 */
let heightChecker = function(heights) {
    let heights_sort = [...heights]
    heights_sort.sort((a,b) => a-b)
    let count=0
    for(let i=0;i<heights_sort.length;i++){
        if(heights_sort[i]!=heights[i]){
            count+=1
        }
    }
    return count
};
