// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

// For example:

// bags = 2
// cap = 2
// x (or garden) =
// [[ _ , _ , _ , _ , _ , _ ],
//  [ _ , _ , _ , _ , @ , _ ],
//  [ @ , _ , _ , _ , _ , _ ]]
// returns 'Clean'

// **Solution**

function crap(x, bags, cap){
    // Multiply bags and cap to get total capacity `totalCap`
    // Loop through each array in `x`
    // If an array has 'D', return 'Dog!!'
    // If there is crap, add to a variable `totalCrap`
    // If `totalCap` is > `totalCrap`, return 'Clean', else return 'Cr@p'
    
    const totalCap = bags * cap;
    let totalCrap = 0;
    
    for (let i = 0; i < x.length; i++) {
      if (x[i].includes('D')) {
        return 'Dog!!';
      }
      for (let j = 0; j < x[i].length; j++) {
        if (x[i][j] === '@') {
          totalCrap++;
        }
      }
    }
    
    return totalCap >= totalCrap ? 'Clean' : 'Cr@p';
}

// **Solution 2**

function crap(x, bags, cap){
    let combinedArrs = [];
    
    // Turn arrays into one array
    for (let i = 0; i < x.length; i++) {
      combinedArrs = combinedArrs.concat(x[i]);
    }
    
    if (combinedArrs.includes('D')) {
      return 'Dog!!';
    }
    
    const totalCrap = combinedArrs.filter(el => el === '@').length;
    
    const totalCap = bags * cap;
    
    return totalCap >= totalCrap ? 'Clean' : 'Cr@p';
}