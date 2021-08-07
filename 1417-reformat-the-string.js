/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    s = s.split("")
    var alpha = []
    var number = []
    var result =""
    for(let s_i of s){
        if(isNaN(s_i)){
            alpha.push(s_i)
        }else{
            number.push(s_i)
        }
    }
    if(alpha.length==number.length){
        result = ""
        for(let i=0;i<alpha.length;i++){
            result+=alpha[i]+number[i]
        }
        return result
    }else if(alpha.length+1==number.length){   
        result = ""
        for(let i=0;i<alpha.length;i++){
            result+=number[i]+alpha[i]
        }
        result+=number.slice(-1)
        return result
    }else if(alpha.length == number.length+1){
        result = ""
        for(let i=0;i<number.length;i++){
            result+=alpha[i]+number[i]
        }
        result+=alpha.slice(-1)
        return result
    }else {
        return ""
    }
};
