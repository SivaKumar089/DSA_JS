function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n; // handle if k > n


  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1); // Step 1: reverse whole array o/p 6 5 4 3 2 1
  reverse(0, k - 1); // Step 2: reverse first k elements 5 6 4 3 2 1
  reverse(k, n - 1); // Step 3: reverse rest 5 6 1 2 3 4

  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));
// Output: [3, 4, 5, 6, 7, 1, 2]
