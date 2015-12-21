function repeat(str, num) {
  if (num <= 0) {
    return "";
  } 
  
  else {
      return str.repeat(num);
  }
}

repeat("abc", 3);