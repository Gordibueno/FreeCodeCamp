// falsy bouncer

function bouncer(arr) {
  var filteredArr = arr.filter(function(val) {
    return !(val === "" || val === null || val === false || val === 0 || typeof val === 'undefined' || 
             Number.isNaN(val) === true );  
  });
  return filteredArr;
}                         

bouncer([7, "ate", "", false, 9]);