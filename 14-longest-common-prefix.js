/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==1){
        return strs[0]
    }
    var search_length = strs.map( v => v.length).reduce((a,b) => Math.min(a,b))
    if(search_length==0){return ""}
    var match_str = ""
    for(let i=0;i<search_length;i++){
        var duplicate = []
        for(let j=0;j<strs.length;j++){
            duplicate.push(strs[j].charAt(i))
        }
        duplicate = Array.from(new Set(duplicate))
        if(duplicate.length==1){
            match_str+=duplicate[0]
        }else{
            return match_str;
        }
    }
    return match_str
};
