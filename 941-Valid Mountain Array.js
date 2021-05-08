/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length<3){
        return false;
    }else{
        var max_i = arr.indexOf(Math.max(...arr));
        if(max_i==0 || max_i==arr.length-1){
            return false;
        }
        var first = arr.slice(0,max_i+1);
        var second = arr.slice(max_i);
        var set1 = new Set(first);
        set1_l = set1.size;
        var set2 = new Set(second);
        set2_l = set2.size;
        if(set1_l===first.length && set2_l === second.length){
            const first_s = first.slice().sort((a,b) => (a < b ? -1 : 1))
            const second_s = second.slice().sort((a,b) => (a > b ? -1 : 1))
            
            if (first_s.toString() === first.toString() 
                && second_s.toString() === second.toString()){
                return true;
            }else {
                return false;
            }
        
        }else{
            return false;
        }
    }
    
};