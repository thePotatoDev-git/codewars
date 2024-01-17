// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// **Solution**

function calculateTip(amount, rating) {
    // Change "rating" to lowercase
    // Multiply the amount by corresponding rating and round the amount up
    
    rating = rating.toLowerCase();
    if (rating === 'terrible') {
      return 0;
    } else if (rating === 'poor') {
      return Math.ceil(amount * 0.05);
    } else if (rating === 'good') {
      return Math.ceil(amount * 0.1);
    } else if (rating === 'great') {
      return Math.ceil(amount * 0.15);
    } else if (rating === 'excellent') {
      return Math.ceil(amount * 0.2);
    } else {
      return 'Rating not recognised';
    }
  }