let str = 'hello'
const reverseString = function() {
  for (let i = 0; i < str.length; i++){
    let strReverse = str.split("");
    strReverse.reverse();
    let strR = strReverse.join();
    return strR.toString(" ");
}};



// I am really struggling with these exercises.
/*Array.splice(str);
Array.reverse(str);*/

reverseString()

console.log(str.type);
// Do not edit below this line
module.exports = reverseString;
