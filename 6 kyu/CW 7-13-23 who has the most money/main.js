// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }
// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

// Notes:

// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money

// **Solution**

function mostMoney(students) {
    // If there is only one student, return that student
    // Map a new array "studentTotals" that includes the student name and their total money
    // If every student has the same amount of money, return 'all'
    // Sort the "studentTotals" by total money, and return the student with the highest total
  
    if (students.length === 1) {
      return students[0].name;
    }
  
    const studentTotals = students.map(student => [student.name, (student.fives * 5) + (student.tens * 10) + (student.twenties * 20)]);
  
    if (studentTotals.every(student => student[1] === studentTotals[0][1])) {
      return 'all';
    }
  
    const sorted = studentTotals.sort((a, b) => {
      if (a[1] < b[1]) {
        return 1;
      } else {
        return -1;
      }
    });
  
    return sorted[0][0];
}