/**
 * @param {number[]} deck
 * @return {boolean}
 */
function GCF(a, b) {
    if (b === 0) return a;
    else         return GCF(b, a % b);
}

var hasGroupsSizeX = function(deck) {
    count = {}
    for(var i=0;i<deck.length;i++){
        var elm = deck[i];
        count[elm] = (count[elm] || 0 ) + 1
    }
    
    count2 = new Array(Object.keys(count).length)
    count2.fill(0)
    var keys = Object.keys(count);
    for(let i=0;i<Object.keys(count).length;i++){
        count2[i]=count[keys[i]]
    }
    
    var min_value = count2.reduce(GCF)
    if(min_value<2){return false}
    if(min_value<2 && count2.length<2){return false}
    var flag=count2.filter( v =>  v%min_value!=0 )
    return flag.length==0? true: false
    
};


