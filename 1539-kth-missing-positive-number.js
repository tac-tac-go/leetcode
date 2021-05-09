/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let count=0;
    for(let i=1;i<=2000;i++){
        if (!arr.includes(i)){
            if (count==k-1){
                return i;
            }else{
                count+=1;
            }
        }
    }
};
