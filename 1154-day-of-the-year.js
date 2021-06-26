/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
   var date_s = date.split("-")
   var year = date_s[0]
   var month = date_s[1]
   var day = date_s[2]
   var result=0
   for(let i=1;i<month;i++){
       result+=new Date(year,i, 0).getDate();
   }
   return Number(day)+Number(result);
};
