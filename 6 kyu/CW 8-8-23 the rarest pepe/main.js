// The pepe market is on the verge of collapse. In a last ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the Internet in order to identify the rarest, which are worth more. Since this would be tedious to do by hand, you decide to use your programming skills to streamline the process.

// Your task in this kata is to implement a function that, given a list of pepes (pepes), returns the rarest pepe in the list. If two or more pepes are equally rare, return a list of these pepes, sorted in alphabetical order. Also, if the rarest pepe (or pepes) has a frequency of 5 or more, then it is not really a rare pepe, so your function should return 'No rare pepes!'.

// **Solution**

function findRarestPepe(pepes) {
    // Map out all the pepes
    // Loop through the rare pepes
    // If the current pepe is less than the current rarest pepe, replace currentRarest with that pepe
    // If the currentRarest appears >= 5 times, return 'No rare pepes!'. Else return the rarest pepe
  
    const counts = {};
  
    for (const pepe of pepes) {
      counts[pepe] = counts[pepe] ? counts[pepe] + 1 : 1;
    }
  
    let currentRarest = pepes[0];
    let currentRarestCount = counts[currentRarest];
  
    for (const pepe in counts) {
      if (counts[pepe] < currentRarestCount) {
        currentRarest = pepe;
        currentRarestCount = counts[pepe];
      }
    }
  
    const pepeArr = [];
  
    for (const pepe in counts) {
      if (counts[pepe] === currentRarestCount) {
        pepeArr.push(pepe);
      }
    }
  
    if (currentRarestCount >= 5) {
      return 'No rare pepes!';
    } else if (pepeArr.length > 1) {
      return pepeArr.sort();
    } else {
      return currentRarest;
    }
}