// You are the best freelancer in the city. Everybody knows you, but what they don't know, is that you are actually offloading your work to other freelancers and and you rarely need to do any work. You're living the life!

// To make this process easier you need to write a method called workNeeded to figure out how much time you need to contribute to a project.

// Giving the amount of time in minutes needed to complete the project and an array of pair values representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]] calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.

// If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
// If we don't have to contribute any time to the project then return "Easy Money!"

// **Solution**

function workNeeded(projectMinutes, freelancers) {
    // Make an empty variable "freelancerMins"
    // Loop through freelancers
    // Add freelancers[i][0] * 60 and freelancers[i][1] to freelancerMins
    // If freelancerMins is > projectMinutes, return 'Easy Money!'
    // Else find the remaining hours and mins that you need to work
  
    let freelancerMins = 0;
  
    for (let i = 0; i < freelancers.length; i++) {
      freelancerMins += freelancers[i][0] * 60;
      freelancerMins += freelancers[i][1];
    }
  
    if (freelancerMins >= projectMinutes) {
      return 'Easy Money!';
    }
    
    const remainingMins = projectMinutes - freelancerMins;
    const hours = Math.floor(remainingMins / 60);
    const mins = remainingMins % 60;
  
    return `I need to work ${hours} hour(s) and ${mins} minute(s)`;
}