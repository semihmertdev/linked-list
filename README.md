# LinkedList Implementation in JavaScript

This project implements a LinkedList data structure in JavaScript, consisting of two main classes: Node and LinkedList.

## Node Class
The Node class represents a single node in the linked list. Each node contains a value and a reference to the next node in the sequence.

## LinkedList Class
The LinkedList class manages a collection of nodes. It supports various operations such as appending nodes, prepending nodes, inserting nodes at specific positions, removing nodes, and searching for nodes by value.

### Usage

```javascript
// Example usage:
const myList = new LinkedList();
myList.append(5);
myList.append(10);
myList.append(15);

console.log(myList.toString()); // Output: (5) -> (10) -> (15) -> null

myList.insertAt(7, 1);
console.log(myList.toString()); // Output: (5) -> (7) -> (10) -> (15) -> null

myList.removeAt(2);
console.log(myList.toString()); // Output: (5) -> (7) -> (15) -> null
```

### Methods
* append(value): Appends a node with the given value to the end of the list.
* prepend(value): Prepends a node with the given value to the beginning of the list.
* insertAt(value, index): Inserts a node with the given value at the specified index in the list.
* removeAt(index): Removes the node at the specified index from the list.
* getSize(): Returns the number of nodes in the list.
* getHead(): Returns the head node of the list.
* getTail(): Returns the tail node (last node) of the list.
* getNodeAt(index): Returns the node at the specified index in the list.
* contains(value): Checks if the list contains a node with the specified value.
* find(value): Returns the index of the first node containing the specified value in the list.
* toString(): Converts the linked list to a string representation.

