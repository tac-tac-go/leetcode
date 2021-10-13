/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count=0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]==1){
                if(mat[i].filter(i => i==1).length==1 && mat.map(item => item[j]).filter(i => i==1).length==1){
                    count+=1
                    
                }
            }
        }
    }
    return count
    
};
