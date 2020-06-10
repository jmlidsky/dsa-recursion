// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const reverseString = function(string) { // dog
  console.log(string)
  if(string.length === 0) {
    return string
  }
  else {
    return reverseString(string.substring(1)) + string.charAt(0) //og + d
  }
}

// const reverseString = function(string) { // og
//   console.log(string)
//   if(string.length === 0) {
//     return string
//   }
//   else {
//     return reverseString(string.substring(1)) + string.charAt(0) // g + o
//   }
// }

// const reverseString = function(string) { // g
//   console.log(string)
//   if(string.length === 0) {
//     return string
//   }
//   else {
//     return reverseString(string.substring(1)) + string.charAt(0) // '' + g
//   }
// }

// const reverseString = function(string) { // ''
//   console.log(string)
//   if(string.length === 0) {
//     return string
//   }
//   else {
//     return reverseString(string.substring(1)) + string.charAt(0)
//   }
// }
reverseString('dog')