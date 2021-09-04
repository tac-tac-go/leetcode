/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    var ex = /\s/g;
    var text_m = text.match(ex);
    if(text_m==null){return text}
    var space_l = text_m.length;
    var text_s = text.split(" ").filter(v => v.length>0)
    
    if(text_s.length-1<=0){return text_s.slice(-1)+" ".repeat(space_l)}
    
    var space = Math.floor(space_l/(text_s.length-1))
    var space_r = space_l%(text_s.length-1)
    
    let result='';
    for(let i=0;i<text_s.length-1;i++){
        result+=text_s[i].concat(" ".repeat(space))
    }
    result+=text_s.slice(-1)+" ".repeat(space_r)
    return result
};
