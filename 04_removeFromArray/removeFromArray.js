const removeFromArray = function(array, number) {
    // need a new variable called newArray. Need an if statement.
    for (i = 0; i < array.length; i++) {
      if (array.number = number) { //This is not doing what I thought - Should I be using ...theArgs???
            array.toSpliced(number); // I don't think this is either. So vlaue isnt what I thought.
            i++;
        } else {
            i++
        };
    } //Maybe I need the delete part and tooSpliced is too basic.
    const newArray = array.toSpliced(number);
    console.log(newArray);
    return newArray;
  };
  
 removeFromArray([1, 2, 3, 4], 3);
 removeFromArray([1, 2, 3, 4], 3, 2);
 removeFromArray([1, 2, 2, 3], 2);
 removeFromArray([1, 2, 3, 4], 7, "tacos");
 removeFromArray([1, 2, 3, 4], 7, 2);
 removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
 removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
 removeFromArray([1, 2, 3], "1", 3);
 
//How can I use a loop to figure this problem out..

// Do not edit below this line
module.exports = removeFromArray;
