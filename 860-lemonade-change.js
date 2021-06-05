/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var bill=[0,0,0]
    for(const val of bills){
        if(val==5){
            bill[0]+=1
        }else if(val==10){
            bill[1]+=1
            bill[0]-=1
        }else{
            bill[2]+=1
            if(bill[1]>0){
                bill[0]-=1
                bill[1]-=1
            }else{
                bill[0]-=3
            }
            
        }
        
        if(bill.reduce((a,b) => Math.min(a,b))<0){
            return false
        }
        
    }
    return true
    
};
