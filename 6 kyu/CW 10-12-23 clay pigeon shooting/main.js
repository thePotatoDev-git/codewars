// Pete and his mate Phil are out in the countryside shooting clay pigeons with a shotgun - amazing fun.

// They decide to have a competition. 3 rounds, 2 shots each. Winner is the one with the most hits.

// Some of the clays have something attached to create lots of smoke when hit, guarenteed by the packaging to generate 'real excitement!' (genuinely this happened). None of the explosive things actually worked, but for this kata lets say they did.

// For each round you will receive the following format:

// [{P1:'XX', P2:'XO'}, true]

// That is an array containing an object and a boolean. Pl represents Pete, P2 represents Phil. X represents a hit and O represents a miss. If the boolean is true, any hit is worth 2. If it is false, any hit is worth 1.

// Find out who won. If it's Pete, return 'Pete Wins!'. If it is Phil, return 'Phil Wins!'. If the scores are equal, return 'Draw!'.

// Note that as there are three rounds, the actual input (x) will look something like this:

// [[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]

// **Solution**

function shoot(x){
    // Make empty variables for Pete's score and Phil's score
    // Loop through x
    // Count the X's in each array for P1, and multiply it by 2 if the boolean is true. Then add it to Pete's score.
    // Do the same as above for P2 and add it to Phil's score
    // Return the victor
  
    let peteScore = 0;
    let philScore = 0;
  
    for (let i = 0; i < x.length; i++) {
      const p1Score = x[i][0]['P1'];
      const p2Score = x[i][0]['P2'];
      const bonus = x[i][1];
      let p1CurrentRound = 0;
      let p2CurrentRound = 0;
  
      if (p1Score === 'XX') {
        p1CurrentRound += 2;
      } else if (p1Score === 'XO' || p1Score === 'OX') {
        p1CurrentRound += 1;
      }
  
      if (p2Score === 'XX') {
        p2CurrentRound += 2;
      } else if (p2Score === 'XO' || p2Score === 'OX') {
        p2CurrentRound += 1;
      }
  
      if (bonus === true) {
        peteScore += p1CurrentRound * 2;
        philScore += p2CurrentRound * 2;
      } else if (bonus === false) {
        peteScore += p1CurrentRound;
        philScore += p2CurrentRound;
      }
    }
  
    if (peteScore > philScore) {
      return 'Pete Wins!';
    } else if (philScore > peteScore) {
      return 'Phil Wins!';
    } else {
      return 'Draw!';
    }
}
  
console.log(shoot([[{P1: 'XX', P2: 'XO'}, true], [{P1: 'OX', P2: 'OO'}, false],  [{P1:'XX', P2:'OX'}, true]])); // 'Pete Wins!'
console.log(shoot([[{P1:'XX', P2:'XO'}, false], [{P1:'OX', P2:'XX'}, false], [{P1:'OO', P2:'XX'}, true]])); // 'Phil Wins!'
console.log(shoot([[{P1:'XX', P2:'XX'}, true], [{P1:'XX', P2:'OX'}, false], [{P1:'OO', P2:'OX'}, true]])); // 'Phil Wins!'