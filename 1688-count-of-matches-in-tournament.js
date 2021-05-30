/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let count=0;
    while(n >1 ){
        if(n%2==1){
            n = Math.floor(n/2)
            count+=n
            n+=1
        }else{
            n = n/2
            count+=n
        }
    }
    return count
};
