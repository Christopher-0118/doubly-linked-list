const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        if (this.isEmpty()) {
            this._head = new Node(data);
            this._tail = this._head;
            this.length = 1;
        } else {
            var currentNode = this._tail;
            currentNode.next = new Node(data);
            currentNode.next.prev = currentNode;
            this._tail = currentNode.next;
            this.length++;
        }
        return this;       
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        var currentNode = this._head;

        for (var i = 0; i < this.length; i++) {
            if (index === i) {
                return currentNode.data;
            } else {
                currentNode = currentNode.next;
            }
        }
    }

    insertAt(index, data) {
        var currentNode = this._head;

        if (this.isEmpty()) {
           this.append(data); 
        } else
        
         if (this.length === index) {
            var prevNode = this._tail;

            this._tail = new Node(data);
            this._tail.prev = prevNode;
            prevNode.next = this._tail;
            this.length++;
        } else {
            for (var i = 0; i < this.length; i++) {
                if (i === index) {
                    var prevNode = currentNode.prev;
                    var nextNode = currentNode;
                    
                    if (currentNode.prev === null) {
                        this._head = new Node(data);
                        currentNode = this._head;
                        currentNode.next = nextNode;
                        nextNode.prev = currentNode;               
                    } else {
                        currentNode = new Node(data);
                        currentNode.next = nextNode;
                        nextNode.prev = currentNode;
                        currentNode.prev = prevNode;
                        prevNode.next = currentNode;
                    }
                    this.length++;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        return this; 
    }

    isEmpty() {
        return this.length ? false : true; 
    }

    clear() {
       this._head = null;
       this._tail = null;
       this.length = 0;
       return this;
    }

    deleteAt(index) {
        var currentNode = this._head;
        
        if (this.length === 1){
            this.clear();
        } else {
            for (var i = 0; i < this.length; i++) {
                if (i === index) {
                    var prevNode = currentNode.prev;
                    var nextNode = currentNode.next;

                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                    this.length--;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        return this;
    }

    reverse() {
        var arrOfData = [];
        var currentNode = this._head;

        for (var i = 0; i < this.length; i++) {
            arrOfData[i] = currentNode.data;
            currentNode = currentNode.next;
        }
        arrOfData.reverse();
        currentNode = this._head;
        for ( i = 0; i < this.length; i++) {
            currentNode.data = arrOfData[i];
            currentNode = currentNode.next;
        }  
        return this;   
    }

    indexOf(data) {
        var arrOfData = [];
        var currentNode = this._head;

        for(var i = 0; i < this.length; i++) {
            arrOfData[i] = currentNode.data;
            currentNode = currentNode.next;
        }
        return arrOfData.indexOf(data);
    }
}

module.exports = LinkedList;
