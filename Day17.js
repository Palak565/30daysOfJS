// DAY 17: Data Structures

// ACTIVITY 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node{
    constructor(val, next = null)
    {
        this.val = val;
        this.next = next;
    }
}


// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList{
    constructor(head){
        this.head = head;
    }
    insert(val){
        let temp = this.head;
        while (temp.next != null)
            temp = temp.next;

        temp.next = new Node(val);
    }

    delete(){
        let temp = this.head;
        while (temp.next.next != null)
            temp = temp.next;

        temp.next = null;
    }

    display(){
        let temp = this.head;
        console.log("Linked list:")
        if (temp == null)
        {    
            console.log("Empty list!!!");
            return;
        }
        
        while (temp != null)
        {
            console.log(temp.val + " ");
            temp = temp.next;
        }

    }
}

let head1 = new Node(1);
let LL = new LinkedList(head1);
LL.insert(2);
LL.insert(5);
LL.insert(9);
LL.insert(6);
LL.insert(3);
LL.delete();
LL.delete();
LL.display();
// O/P : 
// 1
// 2
// 5
// 9


// ACTIVITY 2: Stack
// Task 3: Implement a stack class with methods push, pop and peek.
class Stack
{
    constructor(){
        this.top = -1;
        this.stack = [];
    }

    push(val){
        this.stack[++(this.top)] = val;
    }

    pop(){
        if (this.stack.length == 0)
            return "Pop not possible";
        return this.stack[this.top--];
    }

    peek(){
        return this.stack[this.top];
    }
}

let st1 = new Stack();
st1.push(5);
st1.push(7);
console.log("Topmost element = " + st1.peek()); // O/P : Topmost element = 7
st1.push(8);
st1.push(1);
console.log("Topmost element = " + st1.peek()); // O/P : Topmost element = 1
console.log("Element popped= " + st1.pop()); // O/P : Element popped= 1
console.log("Topmost element = " + st1.peek()); // O/P : Topmost element = 8


// Task 4: Use the Stack class to reverse a string by pushing all characters into the stack and then popping them off.
let st2 = new Stack();
let str = "Hello ";
for (let i = 0; i < str.length; i++){
    st2.push(str[i]);
}

let rev = "";
while (st2.top > -1)
{
    rev = rev + st2.pop();
}
console.log("Reversed string = " + rev); // O/P : Reversed string =  olleH



// ACTIVITY 3: Queue
// Task 5: Implement a queue class with methods enqueue, dequeue and front.
class Queue
{
    constructor(){
        this.front = -1;
        this.rear = -1;
        this.queue = [];
    }

    enqueue(val){
        if (this.front == -1 && this.rear == -1)
        {
            this.front++;
        }
        this.queue[++(this.rear)] = val;
    }

    dequeue(){
        if (this.front == -1 && this.rear == -1)
        {
            return "Empty Queue!!!";
        }
        else if (this.front == this.rear)
        {
            let delval = this.queue[this.front];
            this.front = -1;
            this.rear = -1;
            return delval;
        }
        
        return this.queue[(this.front)++];        
    }

    getFront(){
        return this.queue[this.front];
    }
}

let q = new Queue();
q.enqueue(11);
q.enqueue(23);
q.enqueue(36);
q.enqueue(41);
q.enqueue(50);
console.log("Element deleted = " + q.dequeue()); // O/P : Element deleted = 11
console.log("Element at front end = " + q.getFront()); // O/P : Element at front end = 23


// Task 6: Use the queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
let print = new Queue();
print.enqueue(1);
print.enqueue(2);
print.enqueue(3);
print.enqueue(4);
print.enqueue(5);
for (let i = print.front; i <= print.rear; i++)
{
    console.log("Job done: " + print.dequeue());
}
// O/P :
// Job done: 1
// Job done: 2
// Job done: 3
// Job done: 4
// Job done: 5



// ACTIVITY 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left & right.
class TreeNode
{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree
{
    constructor(root = null){
        this.root = root;
    }
    insert(root,val){
        if (root === null)
            return new TreeNode(val);
        
        if (val < root.val)
            root.left = this.insert(root.left,val);
        else
            root.right = this.insert(root.right,val);

        return root;        
    }

    inorder(root){
        if (root != null)
        {
            this.inorder(root.left);
            console.log(root.val);
            this.inorder(root.right);
        }
    }
}

let root = new TreeNode(10);
let tree = new BinaryTree(root);
tree.insert(root,12);
tree.insert(root,15);
tree.insert(root,1);
tree.insert(root,3);
tree.insert(root,5);
tree.inorder(root);
// O/P : 
// 1
// 3
// 5
// 10
// 12
// 15
