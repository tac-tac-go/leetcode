/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    return (salary.filter(v => v!== salary.reduce((a,b) => Math.max(a,b))).filter(v=> v!=salary.reduce((a,b) => Math.min(a,b))).reduce((a,b) => a+b))/(salary.length-2)
};
