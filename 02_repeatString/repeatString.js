
const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }
    return str.repeat(num);
    
};
repeatString('hey', 3);

/*for (str = 0; str < num; str++){
     if (str < 4)
        str++;
        return str;
    };*/

// Do not edit below this line

module.exports = repeatString;
