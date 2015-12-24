function where(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}

where([10, 20, 30, 40, 50], 35);