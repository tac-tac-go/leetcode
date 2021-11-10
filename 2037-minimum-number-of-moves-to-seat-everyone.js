/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a,b) => a-b)
    students.sort((a,b) => a-b)
    console.log(seats,students)
    let count=0;
    for(let i=0;i<seats.length;i++){
        count+=Math.abs(students[i]-seats[i])
    }
    return count
    
};
