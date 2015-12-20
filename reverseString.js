function reverseString(str) {
  
  var strReverse = str.split('').reverse().join(''); 
// split() returns an array of all characters/spaces/etc on which reverse() and join() can be applied
  
  return strReverse;
}

reverseString("hello there");