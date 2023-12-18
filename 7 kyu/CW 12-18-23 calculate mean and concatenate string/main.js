// You will be given an array which will include both integers and characters.

// Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

// lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
// Here is an example of your return

// [3.6, "udiwstagwo"]

// **Solution**

function mean(lst){
    // Make an empty array variable "nums" and an empty "str" variable
    // Loop through lst
    // If lst[i] is >= 0, push it to "nums"
    // Else add it to "str"
    // Get the mean of nums
    // Return the mean and the concatenated string
    
    const nums = [];
    let str = '';
    
    for (let i = 0; i < lst.length; i++) {
      if (lst[i] >= 0) {
        nums.push(lst[i]);
      } else {
        str += lst[i];
      }
    }
    
    const mean = nums.reduce((total, num) => total += Number(num), 0) / nums.length;
  
    return [mean, str];
    
}