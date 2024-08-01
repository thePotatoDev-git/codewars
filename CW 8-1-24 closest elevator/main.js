function elevator(left, right, call){
  // Find the difference from call and left, and difference from call and right
  // Return the elevator with the lowest difference
  
  return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}