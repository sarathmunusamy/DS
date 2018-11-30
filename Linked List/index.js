class listNode {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;

    }

}

class linkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {

        this.head = new listNode(data, this.head);

    }

    size() {

        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }


    getFirst() {
        return this.head;
    }

    getLast() {

        let node = this.head;

        while (node) {

            node = node.next;
            if (node.next == null)
                return node;
        }

        return node;
    }

    clear() {

        this.head = null;
    }

    removeFirst() {

        if (!this.head)
            return;
        this.head = this.head.next;
    }

    removeLast() {

        if (this.head == null)
            return;

        if (this.head.next == null) {

            this.head = null;
            return;
        }

        let node = this.head;
        let prev;


        while (node) {

            prev = node;
            node = node.next;
            if (node.next == null) {
                prev.next = null;
                return node;
            }

        }

    }

    insertLast(data) {

        var insertNode = new listNode(data);
        let node = this.head;

        // if (!this.head) {

        //     this.head = this.insertNode;
        //     return;


        // }

        // while (node) {

        //     node = node.next;
        //     if (node.next == null) {

        //         node.next = insertNode;
        //         return node.next;
        //     }

        // }

        var last_node = this.getLast()

        if (last_node) {

            last_node.next = insertNode;
            return;
        } else
            return;
    }

    getAt(index) {


        let node = this.head;
        let counter = 1;

        if (index > this.size()) {
            console.log("out of bound");
            return;
        }

        if (index <= 0) {
            console.log("give greater that 0");
            return;
        }

        while (node) {

            if (counter == index) {
                return node;
            }

            node = node.next;
            counter++;
        }

    }

    insertAt(data, index) {

        let node = this.head;
        let newNode = new listNode(data);
        let counter = 1;

        
        if (index <= 0) {
            console.log("greater than ");
            return;
        }

        if (index == 1) {
            this.insertFirst(data);
            return;
        }


        let targetNode = this.getAt(index - 1);

        newNode.next = this.getAt(index);
        targetNode.next = newNode;
    }


    removeAt(index) {


        if (index <= 0) {
            console.log("greater than ");
            return;
        }


        var prevNode = this.getAt(index - 1);

        if (!prevNode) {

            var nextNode = this.getAt(index+1);
            if(nextNode){

                this.head = nextNode;
                return;
            }else{

                this.head = null;
            }
        }

        var targetNode = this.getAt(index);


        if (prevNode)
            prevNode.next = targetNode.next;

        return;

    }
}

