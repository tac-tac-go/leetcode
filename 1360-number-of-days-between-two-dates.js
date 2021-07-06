/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    var date1 = new Date(date1);
    var date2 = new Date(date2);
    return Math.abs(date2 - date1)/(1000*60*60*24)
};
