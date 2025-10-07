class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the end
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from the front
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // View the front element
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return size
  size() {
    return this.items.length;
  }

  // Print queue
  print() {
    console.log(this.items.toString());
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front:", queue.front()); // 10
queue.print(); // 10,20,30

queue.dequeue();
queue.print(); // 20,30

console.log("Queue size:", queue.size());
