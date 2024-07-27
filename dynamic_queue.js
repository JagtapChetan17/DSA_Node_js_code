class Node{
    constructor(n)
    {
        this.data = n;
        this.next = null;
    }
}

class Queue{
    constructor()
    {
        this.front = this.rear = null;
    }

    isEmpty()
    {
        return this.front == null;
    }

    enqueue(n)
    {
        let nn = new Node(n);
        if(this.isEmpty())
        {
            this.front = this.rear = nn;
        }
        else
        {
            this.rear.next = nn;
            this.rear = nn;
        }
    }

    dequeue()
    {
        if(this.isEmpty())
        {
            console.log("Queue empty. Cannot dequeue!!");
        }
        else
        {
            this.temp = this.front;
            this.front = this.front.next;
            console.log("Dequeued: ", this.temp.data);
            delete this.temp;
        }
    }

    peek()
    {
        if(this.isEmpty())
        {
            console.log("Queue empty. Cannot peek!!");
        }
        else
        {
            console.log("Top Element: ", this.front.data);
        }
    }

    display()
    {
        let str = "";
        this.temp = this.front;
        while(this.temp != null)
        {
            str += this.temp.data;
            this.temp = this.temp.next;
            if(this.temp != null)
            {
                str += "<-";
            }
        }
        console.log(str);
    }
}

const q = new Queue();
q.enqueue(12);
q.enqueue(14);
q.enqueue(11);
q.enqueue(13);
q.enqueue(17);
q.display();
q.peek();
q.dequeue();
q.dequeue();
q.peek();
q.dequeue();
q.display();
q.enqueue(15);
q.enqueue(20);
q.enqueue(22);
q.display();