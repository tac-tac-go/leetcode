/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let result=[]
    for(let i=0;i<digits.length;i++){
        for(let j=0;j<digits.length;j++){
            for(let k=0;k<digits.length;k++){
                if(i!==j && j!=k && i!=k){
                    let str = Number(String(digits[i])+String(digits[j])+String(digits[k]))
                    if(String(str).length==3 && str%2==0){
                        if(result.indexOf(str)==-1){
                            result.push(str)
                        }
                    }   
                    
                }
            }
        }
    }
    result.sort((a,b) => a-b)
    return result
};
