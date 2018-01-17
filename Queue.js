class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this._first = null;
        this._last = null;
        this._length = 0;
    }

    prepend(...elements) {
        elements.reverse().forEach((el) => {
            const newNode = new ListNode(el);
            if (this._first === null) {
                this._first = newNode;
                this._last = newNode;
            } else {
                newNode.next = this._first;
                this._first = newNode;
            }
        });

        this._length += elements.length;

        return this;
    }

    *[Symbol.iterator]() {
        let nextNode = this._first;
        while (nextNode !== null) {
            yield nextNode.value;
            nextNode = nextNode.next;
        }
    }

    toArray() {
        return [...this];
    }
}

let x = new Queue();
x.prepend(2);
console.log(x);
x.toArray();
console.log(x.toArray());