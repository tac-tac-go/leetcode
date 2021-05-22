/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    var time2 = time.split(":")
    var time  = time.split("").filter( v => {return v!== ':'})
    var hour=0;
    var minute=0;
    
    
    if(time[0]=="?"){
        if(time[1]<=3){hour=2}
        else{hour=1}
    }
    
    if(time[1]=="?"){
        if (time[0]=="1" || time[0]=="0"){hour =9}
        else{ hour=3}
    }
    
    if(time[2]=="?"){
        minute=5
    }
    
    if(time[3]=="?"){
        minute=9
    }
    
    
    if(time[0]=="?" && time[1]=="?" && time[2]=="?" &&  time[3]=="?"){
        return "23:59"
    }
    
    if(time[0]=="?" && time[1]=="?"){
        hour=23
    }
    
    if(time[2]=="?" && time[3]=="?"){
        minute=59
    }
    
    
    return time2[0].replace("?",hour).replace(/\?/g, '')+":"+time2[1].replace("?",minute).replace(/\?/g, '');
    
    
};
