const reverseString = function() {
  let str = 'hello';
    for (let i = 0; i < str.length; i++) {
      let strReverse = str.split("");
        strReverse.reverse();
      let strR = strReverse.toString() 
        strR.concat();
        str.replaceAll(",", "");
      return strR;
    }
  
};

reverseString();
/* Psuedo
1) I want to creat a function that 
  a) takes a string;
  b) turns string into an array
  c) reverses that array
  d) turns that reversed array back to a string


I am having issues when turning the array back to a string
*/

/*const reverseString = function() {
  let str = 'hello';
    for (let i = 0; i < str.length; i++) {
      let strReverse = str.split("");
          strReverse.reverse();
      let strR = strReverse.toString() 
        strR.concat();
        str.replaceAll(",", "");
      return strR;
    }
  
};
*/

/* for (let i = 0; i < str.length; i++) {
      let strReverse = str.split("");
          strReverse.reverse();
      let strR = strReverse.toString();
          strR.concat();
          str.replaceAll(",", "");
      return strR;
    }*/ // still returning with commas.
/*     //strReverse.replaceAll(",", "");

       // strReverse.toString();
*/ // These did work? Idk why

// I am really struggling with these exercises.
/*Array.splice(str);
Array.reverse(str);*/


// Do not edit below this line
module.exports = reverseString;
