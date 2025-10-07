class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
  }

  enqueue(element) {
    this.items[this.rearIndex] = element;
    this.rearIndex++;
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  isEmpty() {
    return this.rearIndex === this.frontIndex;
  }

  front() {
    return this.items[this.frontIndex];
  }

  size() {
    return this.rearIndex - this.frontIndex;
  }

  print() {
    console.log(this.items);
  }
}

const q = new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
q.print();
console.log("Dequeued:", q.dequeue());
q.print();
