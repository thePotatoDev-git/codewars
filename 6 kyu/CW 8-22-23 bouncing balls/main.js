// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

// **Solution**

function bouncingBall(h,  bounce,  window) {
    // If h is less than 0, bounce is > 1 or < 0, window is > h, return -1
    // Make an empty 0 variable "momsCount" 
    // Make a variable "nextBounce" starting at h
    // Make a loop that ends when "nextBounce" is less than "window"
    // Each loop, multiply "nextBounce" * "bounce"
    // If "nextBounce" is greater than window, add 2 to "momsCount"
    // If "nextBounce" is less than window, add 1 to "momsCount"
  
    if (h < 0 || bounce >= 1 || bounce < 0 || window >= h) {
      return -1;
    }
  
    let momsCount = 0;
    let nextBounce = h;
  
    while (nextBounce > window) {
      nextBounce = nextBounce * bounce;
  
      if (nextBounce > window) {
        momsCount += 2;
      } else {
        momsCount++;
      }
    }
  
    return momsCount;
  }

  console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
  console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
  console.log(bouncingBall(3.0, 1.0, 1.5)); // -1