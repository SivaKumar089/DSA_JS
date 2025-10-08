class CircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.size = k;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full");
      return false;
    }

    if (this.isEmpty()) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return false;
    }

    if (this.front === this.rear) {
      // Only one element
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.rear];
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
}

// 🚀 Example:
const cq = new CircularQueue(3);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
console.log(cq.enqueue(40)); // Queue full
console.log(cq.Rear()); // 30
cq.dequeue();
cq.enqueue(40);
console.log(cq.Rear()); // 40
