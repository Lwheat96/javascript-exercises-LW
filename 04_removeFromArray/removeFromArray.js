const removeFromArray = function(array) {
    // need a new variable called newArray. Need an if statement.
    const newArray = array.toSpliced(2,1)
    return newArray;
};

removeFromArray([1, 2, 3, 4]);

// Do not edit below this line
module.exports = removeFromArray;
