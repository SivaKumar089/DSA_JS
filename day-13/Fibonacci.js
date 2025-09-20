function fibonacci(n) {
  // base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// test
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
