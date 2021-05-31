/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length==1 && flowerbed[0]==0){return true}
    if (flowerbed[0]==0 && flowerbed[1]==0){flowerbed = [0].concat(flowerbed)}
    if (flowerbed.slice(-1)==0 && flowerbed.slice(-2,-1)==0){flowerbed = flowerbed.concat([0])}
    flowerbed = flowerbed.join("").split("1").filter( v => v.length!=0)
    flowerbed = flowerbed.map( v => v.length)
    flowerbed = flowerbed.map( n => (Math.floor((n-3)/2))+1)
    if(flowerbed.length!=0){
        flowerbed = flowerbed.reduce((a,b) => {return a+b})
    }
    
    return flowerbed>=n ? true : false
};
