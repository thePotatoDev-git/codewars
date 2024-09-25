function meeting(x, need){
    if (need === 0) {
      return 'Game On';
    }
  
    const freeChairs = x.map(arr => arr[1] - arr[0].length >= 0 ? arr[1] - arr[0].length : 0); // Array of available chairs in each room
    const takenChairs = [];
    let i = 0; // counter for while loop
  
    while (need > 0 && i < freeChairs.length) {
      need -= freeChairs[i];
      takenChairs.push(freeChairs[i]);
      i++;
    }
  
    if (need < 0) {
      takenChairs[takenChairs.length - 1] = need + takenChairs[takenChairs.length - 1]; // Get rid of extra chairs in last element of array
      return takenChairs;
    } else if (need > 0) {
      return 'Not enough!';
    } else if (need === 0) {
      return takenChairs;
    }
}