/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let max_len = 0;
    for(let i=0;i<colors.length;i++){
        for(let j=0;j<colors.length;j++){
            if(i!==j){
                if(colors[i]!=colors[j] && Math.abs(i-j)>max_len){
                    max_len=Math.abs(i-j)
                }
            }
        }
    }
    return max_len;
};
