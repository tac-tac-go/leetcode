/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
    if(numRows==1){ return [[1]]}
    else if(numRows==2){ return [[1],[1,1]]}
    else{
        let result=[[1],[1,1]]
        for(let i=2;i<numRows;i++){
            let result2=[]
            for(let i2=0;i2<result[i-1].length-1;i2++){
                result2.push(result[i-1][i2]+result[i-1][i2+1])
            }
            let result3 = [1].concat(result2).concat([1])
            result.push(result3)
        }
        return result;
    }
};
