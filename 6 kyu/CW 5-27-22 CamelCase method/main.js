// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// **Solution**

String.prototype.camelCase=function(){
    const splitArr = this.split(' ');
    return splitArr.map(el => el.charAt(0).toUpperCase() + el.substring(1)).join('');
  }