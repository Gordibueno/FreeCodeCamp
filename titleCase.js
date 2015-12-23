function titleCase(str) {
  
  var newstr = str.split(" ");
  
  for(i=0;i<newstr.length;i++){
    newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].substring(1).toLowerCase();
  }
  
   newstr = newstr.join(" ");
   return newstr;

}

titleCase("I'm a little tea pot");