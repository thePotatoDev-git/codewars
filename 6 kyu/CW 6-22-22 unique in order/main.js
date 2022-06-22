// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// **Solution**

var uniqueInOrder=function(iterable){
  typeof iterable === 'string' ? iterable = iterable.split('') : iterable;
  const uniqueOrder = [];

  iterable.forEach((el, i) => {
    if (el !== iterable[i + 1]) {
      uniqueOrder.push(el);
    }
  })
  return uniqueOrder;
}