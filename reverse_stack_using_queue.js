class Stack
{
    constructor()
    {
        this.elements = [];
    }

    push(n)
    {
        this.elements.push(n);
    }

    pop()
    {
        if(!this.isEmpty())
        {
            return this.elements.pop();
        }
        else
        {
            console.log("Stack is empty");
        }
    }

    isEmpty()
    {
        return this.elements.length == 0;
    }

    print()
    {
        return this.elements;
    }
}

class Queue
{
    constructor()
    {
        this.elements = [];
    }

    enqueue(n)
    {
        this.elements.push(n);
    }

    dequeue()
    {
        if(!this.isEmpty())
        {
            return this.elements.shift();
        }
        else
        {
            console.log("Queue is empty!");
        }
    }

    isEmpty()
    {
        return this.elements.length == 0;
    }
}

function reverse(s)
{
    const q = new Queue();
    while(!s.isEmpty())
    {
        q.enqueue(s.pop());
    }
    while(!q.isEmpty())
    {
        s.push(q.dequeue());
    }
}

const s = new Stack();
// s.push("S");
// s.push("I");
// s.push("O");
// s.push("M");
s.push("SIOM");
s.push("MCA");
s.push("!!");
console.log("Stack before reversal: ", s.print());
reverse(s);
// reverse(s);
console.log("Stack after reversal: ", s.print());