/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    var result1=new Array(3);//a,b,n
    var result2=new Array(2);//l,o
    result1.fill(0);
    result2.fill(0);
    var text_split = text.split("");
    for(let i=0;i<text_split.length;i++){
        if(text_split[i]=="a"){
            result1[0]+=1
        }else if(text_split[i]=="b"){
            result1[1]+=1
        }else if(text_split[i]=="n"){
            result1[2]+=1
        }else if(text_split[i]=="l"){
            result2[0]+=1
        }else if(text_split[i]=="o"){
            result2[1]+=1
        }
    }
    result2 = result2.map(v => Math.floor(v/2))
    let result = result1.concat(result2)
    return result.reduce((a,b) => Math.min(a,b))
};
