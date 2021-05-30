/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
   var count=0
   var flag = true;
   for(let i=0;i<words.length;i++){
       let word_split=words[i].split("");
       for(let j=0;j<word_split.length;j++){
           if(allowed.indexOf(word_split[j])==-1){
               flag=false
               break
           }   
       }
       if(flag){count+=1}       
       flag = true
   }
   return count
};
