// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// **Solution**

function toCamelCase(str){
    if (str.includes('_')) {
      str = str.split('_');
    } else {
      str = str.split('-');
    }
  
    const camelCase = str.map((el, i) => {
      if (i !== 0) {
        return el.charAt(0).toUpperCase() + el.substring(1);
      }
    })
    return (str[0] + camelCase).split(',').join('');
  }