// 5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

const splitter = function(str, separator)
{
  if (!str.substring(0, 1))
    return '';
    
  if (str.substring(0, 1) != separator)
  {
    return str.substring(0, 1)+splitter(str.substring(1, str.length), separator)
  } else
  {
    return splitter(str.substring(1, str.length), separator)
  }
}

console.log(splitter('02/20/2020', '/'));