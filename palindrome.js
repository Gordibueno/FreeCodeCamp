function palindrome(str) {
  // remove punctuation, case, spacing
  var strNew = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, "").toLowerCase();
  var strReverse = strNew.split('').reverse().join('');
  
  if (strNew === strReverse) {
    return true;
  } else {
    return false;
  }
}



palindrome("A man, a plan, a canal. Panama");