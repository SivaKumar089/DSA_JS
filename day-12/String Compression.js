function compress(chars) {
  let write = 0,
    read = 0;

  while (read < chars.length) {
    let char = chars[read];
    let count = 0;

    // Count same characters
    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    // Write char
    chars[write++] = char;

    // Write count (if > 1)
    if (count > 1) {
      for (let digit of count.toString()) {
        chars[write++] = digit;
      }
    }
  }

  return write; // new length
}

// Example:
let arr = ["a", "a", "b", "b", "c", "c", "c"];
let len = compress(arr);
console.log(len); // 6
console.log(arr.slice(0, len)); // ["a","2","b","2","c","3"]
