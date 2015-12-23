function findLongestWord(str) {
  
  var words = str.split(' ');
  var max_len = 0;
  
  for (i = 0; i < words.length; i++){
    if (words[i].length > max_len) {    
      max_len = words[i].length;      

    }
  }  
  return max_len;
}

findLongestWord("The quick brown fox jumped over the lazy dog");