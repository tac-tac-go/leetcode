/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    result=[];
    for(let i=1;i<n+1;i++){
        if(i%3==0 && i%5==0){ result.push("FizzBuzz");continue;}
        if(i%3==0){ result.push("Fizz");continue;}
        if(i%5==0){ result.push("Buzz");continue;}
        result.push(String(i));
    }
    return result;
};
