/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    let result=""
    for(let i=0;i<s.length;i+=2){
        let str1 = s.slice(i,i+2)
        let str2 = s.slice(i,i+1)
        let str3 = Number(s.slice(i+1,i+2))
        if(str1.length==2){
          result+=str2+alpha[alpha.indexOf(str2)+str3]   
        }else{
            result+=str2
        }
    }
    return result
};
