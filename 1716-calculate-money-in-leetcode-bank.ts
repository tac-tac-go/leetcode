/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    week = Math.ceil(n/7)
    count=0
    for(let i=1;i<=week;i++){
        if(i==week){
                if((n-((i-1)*7))!==0){
                    count+=[...Array((n-((i-1)*7)))].map((v,k) => k + i).reduce((a,b) => a+b)
                }
                
        }else{
            count+=[...Array(7)].map((v,k) => k + i).reduce((a,b) => a+b)
        }
    }
    return count
};
