// Confirm ending

function end(str, target) {
  var slice = target.length;
  
  if (str.substr(- slice) == target) {
    return true;
  }
  
  else {
    return false;
  }
}

end("Bastian", "n");