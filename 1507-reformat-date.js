/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date_s = date.split(" ");
    var m = ("00"+(month.indexOf(date_s[1])+1)).slice(-2)
    return date_s[2]+"-"+m+"-"+("00"+date_s[0].replace(/th|nd|rd|st/g,"")).slice(-2)
};
