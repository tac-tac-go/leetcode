/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count=0;
    for(let value of items){
        var type = value[0]
        var color = value[1]
        var name = value[2]
        if(ruleKey == "type" && ruleValue==type){count+=1;continue}
        else if(ruleKey == "color" && ruleValue ==color){count+=1;continue}
        else if(ruleKey == "name" && ruleValue == name){count+=1;continue}
    }
    return count;
};
