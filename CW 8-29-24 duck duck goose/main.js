// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// // PHP only
// duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

// **Solution**

function duckDuckGoose(players, goose) {
    // If goose is less than players.length, return players[goose-1]
    // If goose is more than players.length, find the modulus of goose % players.length. Then return the index - 1 of the modulus
   
    if (goose <= players.length) {
      return players[goose - 1].name;
    } 
    
    let mod = goose % players.length;
    
    return mod === 0 ? players[players.length - 1].name : players[mod - 1].name;
}