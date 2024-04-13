let str = 'hello'
const reverseString = function() {
    for (let i = 0; i < str.length; i++) {
      let strReverse = str.split("");
          strReverse.reverse();
      let strR = strReverse.toString();
          strR.concat();
          str.replaceAll(",", "");
      return strR;
    }
  
}
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

reverseString()
// Do not edit below this line
module.exports = reverseString;
