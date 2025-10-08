function maxSlidingWindow(nums, k) {
  let deque = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove smaller elements from the back
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Add current index
    deque.push(i);

    // Remove elements out of this window
    if (deque[0] <= i - k) {
      deque.shift();
    }

    // Add max to result (only after first k elements)
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// 🚀 Example:
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3,3,5,5,6,7]
