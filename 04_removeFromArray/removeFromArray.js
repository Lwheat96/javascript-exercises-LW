const removeFromArray = function(array, value) {
    // need a new variable called newArray. Need an if statement.
    for (i = 0; i < array.length; i++) {
      if (array.value = value) {
            array.toSpliced(value);
            i++;
        } else {
            i++
        };
    }
    const newArray = array.toSpliced(value);
    return newArray;
  };
  
 removeFromArray([1, 2, 3, 4], 3);
 removeFromArray([1, 2, 2, 3], 2);
//How can I use a loop to figure this problem out..

// Do not edit below this line
module.exports = removeFromArray;
