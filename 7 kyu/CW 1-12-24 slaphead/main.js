// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

// **Solution**

function bald(x){
    // Make an empty variable "strayHairs"
    // Loop through x
    // If x[i] === '/', add 1 to "strayHairs"
    // Return '-' repeated x.length times and the string value depending on amount of strayHairs found in an array
    
    let strayHairs = 0;
    let str = '';
    
    for (let i = 0; i < x.length; i++) {
      if (x[i] === '/') {
        strayHairs++;
      }
    }
    
    if (strayHairs === 0) {
      str = 'Clean!';
    } else if (strayHairs === 1) {
      str = 'Unicorn!';
    } else if (strayHairs === 2) {
      str = 'Homer!';
    } else if (strayHairs < 6) {
      str = 'Careless!';
    } else {
      str = 'Hobo!';
    }
    
    return ['-'.repeat(x.length), str];
}