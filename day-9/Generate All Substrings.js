let s = "abc";
let substrings = [];

for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j <= s.length; j++) {
    substrings.push(s.slice(i, j));
  }
}

console.log(substrings);

