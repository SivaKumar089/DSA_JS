function compress(chars) {
  let write = 0,
    read = 0;

  while (read < chars.length) {
    let char = chars[read];
    let count = 0;


    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }


    chars[write++] = char;


    if (count > 1) {
      for (let digit of count.toString()) {
        chars[write++] = digit;
      }
    }
  }

  return write;
}


let arr = ["a", "a", "b", "b", "c", "c", "c"];
let len = compress(arr);
console.log(len); 
console.log(arr.slice(0, len)); 
