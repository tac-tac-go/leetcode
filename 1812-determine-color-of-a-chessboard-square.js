/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let alpha = "abcdefghijklnmopqrstuvwxyz";
    let v1 = coordinates.slice(0,1)
    let v2 = Number(coordinates.slice(1,2))
    v1 = Number(alpha.indexOf(v1)+1)
    if(v1%2==1){
        if(v2%2==1){return false}
        else{return true}
    }else{
        if(v2%2==1){return true}
        else{return false}
    }  
};
