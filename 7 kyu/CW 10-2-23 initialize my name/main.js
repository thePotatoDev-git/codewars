// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// **Solution**

function initializeNames(name){
    // Split the name by spaces
    // Map the name
    // If the index isn't the first or last index, change it to the first initial and a period
    // Join the array with spaces
    
    const nameSplit = name.split(' ');
    
    return nameSplit.map((name, i) => {
      if (i === 0 || i === nameSplit.length - 1) {
        return name;
      } else {
        return name[0] + '.';
      }
    }).join(' ');
    
}