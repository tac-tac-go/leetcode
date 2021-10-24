/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    releaseTimes.unshift(0)
    keysPressed = keysPressed.split("")
    let difference = []
    for(let i=0;i<releaseTimes.length-1;i++){
        difference.push(releaseTimes[i+1]-releaseTimes[i])
    }
    let max = -9999
    let string = ""
    for(let [i,v] of difference.entries()){
        if(max<v){
            max = v
            string = keysPressed[i]
        }else if(max==v && string < keysPressed[i]){
            max = v
            string = keysPressed[i]
        }
    }
    return string
};
