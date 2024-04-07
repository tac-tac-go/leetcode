/**
 * @param {string} date
 * @return {number}
 */
let dayOfYear = function(date) {
   let date_s = date.split("-")
   let year = date_s[0]
   let month = date_s[1]
   let day = date_s[2]
   let result=0
   for(let i=1;i<month;i++){
       result+=new Date(year,i, 0).getDate();
   }
   return Number(day)+Number(result);
};
