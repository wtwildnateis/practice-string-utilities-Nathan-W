/*
1. Create the stringUtils.js Module:
○ Define and export the following functions:
■ capitalize(str): Converts the first letter of a string to
uppercase.
■ reverse(str): Reverses the characters in a string.
■ contains(str, substr): Checks if a substring exists within a
string and returns true or false.

*/

function capitalize(str) {
   if (str.length === 0) {
        return ("undefined");
   }
    return str.toUpperCase();
}

function reverse(str) {
  if (str.length === 0) {
        return ("undefined");
  }
    return str.split('').reverse().join('');
}

function contains(str, substr) {
if (str.length === 0) {
        return ("undefined");
    }
    if (substr.length === 0) {
        return ("undefined");
    }

    return str.includes(substr);
}

// Export
module.exports = {
    capitalize,
    reverse,
    contains
};
