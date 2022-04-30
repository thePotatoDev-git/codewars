function index(array, n){
    return array.length - 1 >= n ? Math.pow(array[n], n) : -1;
  }