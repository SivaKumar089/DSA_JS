function reverseString(str) {
  // Base case: if string is empty, return empty
  if (str === "") {
    return "";
  }
  // Recursive case: take last char + reverse of remaining
  return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("Siva")); // "aviS"
