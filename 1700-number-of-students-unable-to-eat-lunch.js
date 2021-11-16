/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while(students.indexOf(sandwiches[0])!=-1){
        if(students[0]==sandwiches[0]){
            students = students.slice(1)
            sandwiches = sandwiches.slice(1)
        }else{
            students = students.slice(1).concat(students[0])
        }
    }
    return students.length
};
