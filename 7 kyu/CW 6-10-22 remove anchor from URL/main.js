// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// **Solution**

function removeUrlAnchor(url){
    const anchor = url.indexOf('#');
    
    return url.includes('#') ? url.slice(0, anchor) : url;
  }