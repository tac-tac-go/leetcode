/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let str = number.split(/[ -]/).filter(v => v.length>0).join("")
    if(str.length<=3){return str}
    result=[]
    while(str.length>5){
        result.push(str.slice(0,3))
        str = str.slice(3)
    }
    if(str.length%3==0){
        result.push(str)
    }else if(str.length%4==0){
        result.push(str.slice(0,2))
        result.push(str.slice(2,))
    }else{
        result.push(str.slice(0,3))
        result.push(str.slice(3))        
    }
    return result.join("-")
};
