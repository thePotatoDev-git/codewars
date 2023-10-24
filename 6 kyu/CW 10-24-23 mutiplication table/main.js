// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// **Solution**

multiplicationTable = function(size) {
    // Make a array variable "table" that contains the first row of a multiplication table
    // Make a nested loop
    // For each loop, make an array that is the length of size
    // For each arr[j], copy the last array but add j+1 to each element
    // Push the completed array to "table"
    
    const firstRow = [];
    for (let i = 1; i <= size; i++) {
      firstRow.push(i);
    }
    const table = [firstRow];
    
    for (let i = 0; i < size-1; i++) {
      const currentRow = [];
      const lastRow = table[i];
      for (let j = 0; j < size; j++) {
        currentRow.push(lastRow[j] + (j+1))
      }
  
      table.push(currentRow);
    }
  
    return table;
}