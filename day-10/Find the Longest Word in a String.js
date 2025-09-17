function longestWord(sentence) {
  let words = sentence.split(" "); // split by spaces
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

// Example
console.log(longestWord("Web development with JavaScript is powerful"));
// Output: "development"
