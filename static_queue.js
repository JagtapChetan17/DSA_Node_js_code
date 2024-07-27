class Queue
{
    constructor()
    {
        this.items = [];
        this.front = this.rear = -1;
    }

    isEmpty()
    {
        return this.items.length == 0;
    }

    enqueue(n)
    {
        if(this.isEmpty())
        {
            this.front += 1;
            this.rear += 1;
            this.items[this.front] = n;
            this.items[this.rear] = n;
        }
        else
        {
            this.rear += 1;
            this.items[this.rear] = n;
        }
        console.log("Enqueued: ", this.items[this.rear]);
    }

    dequeue()
    {
        if(this.isEmpty())
        {
            console.log("Cannot dequeue. Queue is empty!!");
        }
        else
        {
            console.log("Dequeued: ", this.items[this.front]);
            this.front += 1;
        }
    }

    peek()
    {
        if(this.isEmpty())
        {
            console.log("Cannot peek. Queue is empty!!");
        }
        else
        {
            console.log("Top Element: ", this.items[this.front]);
        }
    }

    display()
    {
        let str = "";
        for(let i = this.front; i < this.items.length; i++)
        {
            str += this.items[i];
            if(i < this.items.length-1)
            {
                str += "<-";
            }
        }
        console.log(str);
    }
}

const q = new Queue();
q.enqueue(12);
q.enqueue(13);
q.enqueue(14);
q.enqueue(15);
q.enqueue(16);
q.display();
q.dequeue();
q.dequeue();
q.peek();
q.dequeue();
q.enqueue(20);
q.enqueue(22);
q.display();