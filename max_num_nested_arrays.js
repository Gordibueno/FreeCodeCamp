function largestOfFour(arr) {
  var results = [];
  for (var n=0; n < arr.length; n++) {
    var largest_num = 0;
    for (var sb=0; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largest_num) {
        largest_num = arr[n][sb];
      }
    }    
    results[n] = largest_num; 
  }
  return results;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);