// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){
    // Create an object and assign the values for each deptartment
    // Loop through the staff
    // Add the deptartment value for each staff member to another empty variable
    // If total is <=80, return 'kill me now'
    // If total is < 100 and > 80, return 'i can handle this'
    // If total is >=100, return 'party time!!'
    
    let total = 0;
    const deptValues = {
      'accounts': 1,
      'finance': 2,
      'canteen': 10,
      'regulation': 3,
      'trading': 6,
      'change': 6,
      'IS': 8,
      'retail': 5,
      'cleaning': 4,
      'pissing about': 25,
    }
    
    for (const [person, dept] of Object.entries(staff)) {
      console.log(deptValues[dept]);
      total += deptValues[dept];
    }
    
    if (total <= 80) {
      return 'kill me now';
    } else if (total < 100 && total > 80) {
      return 'i can handle this';
    } else {
      return 'party time!!';
    }
}