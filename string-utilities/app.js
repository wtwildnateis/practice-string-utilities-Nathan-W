const stringUtilities = require('./stringUtils');
const { capitalize, reverse, contains } = stringUtilities;

console.log(capitalize("launchcode"));
console.log(capitalize(""));
console.log(capitalize("123"));
console.log(reverse("Enzo"));
console.log(reverse("400"));
console.log(reverse(""));
console.log(contains("Ferrari", "rar"));
console.log(contains("LaunchCode:", "and"));
console.log(contains("Hello", ""));
console.log(contains("1234", "56"));