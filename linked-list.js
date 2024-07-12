class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Method to append a node at the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
        this.size++;
    }

    // Method to prepend a node at the beginning of the list
    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
        this.size++;
    }

    // Method to get the size of the list
    getSize() {
        return this.size;
    }

    // Method to get the head of the list
    getHead() {
        return this.head;
    }

    // Method to get the tail (last node) of the list
    getTail() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    // Method to get a node at a specific index
    getNodeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current.nextNode;
            count++;
        }
        return current;
    }

    // Method to remove the last node from the list
    pop() {
        if (!this.head) {
            return null;
        }
        if (!this.head.nextNode) {
            this.head = null;
            this.size = 0;
            return;
        }
        let current = this.head;
        let previous = null;
        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
        this.size--;
        return current;
    }

    // Method to check if a value exists in the list
    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    // Method to find the index of a node containing a specific value
    find(value) {
        let index = 0;
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return null; // If value is not found
    }

    // Method to insert a node with the provided value at the given index
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return; // Invalid index, do nothing
        }
        const newNode = new Node(value);
        if (index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
        } else {
            let count = 0;
            let current = this.head;
            let previous = null;
            while (count < index) {
                previous = current;
                current = current.nextNode;
                count++;
            }
            newNode.nextNode = current;
            previous.nextNode = newNode;
        }
        this.size++;
    }

    // Method to remove the node at the given index
    removeAt(index) {
        if (index < 0 || index >= this.size || !this.head) {
            return null; // Invalid index or empty list, return null
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.nextNode;
        } else {
            let count = 0;
            let current = this.head;
            let previous = null;
            while (count < index) {
                previous = current;
                current = current.nextNode;
                count++;
            }
            removedNode = current;
            previous.nextNode = current.nextNode;
        }
        this.size--;
        return removedNode;
    }

    // Method to represent the linked list as a string
    toString() {
        let result = "";
        let current = this.head;
        while (current) {
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }
}

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
