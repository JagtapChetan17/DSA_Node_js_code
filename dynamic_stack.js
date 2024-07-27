class Node
{
    constructor(n)
    {   
        this.data = n;
        this.next = null;
    }
}

class Stack
{
    constructor()
    {
        this.top = null;
    }

    push(n)
    {
        let nn = new Node(n);
        nn.next = this.top;
        this.top = nn;
        console.log("Pushed:", this.top.data);
    }

    isEmpty()
    {
        return this.top==null;
    }

    pop()
    {
        if(!this.isEmpty())
        {
            this.temp = this.top;
            this.top  = this.top.next;
            console.log("Popped Element:", this.temp.data);
            delete this.temp;
        }
        else
        {
            console.log("Stack underflow!!");
        }
    }

    peek()
    {
        if(this.isEmpty())
        console.log("Stack underflow! Cannot peek!");
        else
        console.log("Top element is:", this.top.data);   
    }

    display()
    {
        if(this.isEmpty())
        console.log("Stack underflow! Cannot display!");
        else
        this.temp = this.top;
        while (this.temp!=null) 
        {
            console.log(this.temp.data);
            this.temp = this.temp.next;
        }
    }
}
 let st = new Stack();
 st.push(12);
 st.push(10);
 st.push(14);
 st.push(13);
 st.display();
 console.log("\n");
 st.pop();
 st.peek();
 st.pop();
 st.pop();
 st.peek();
 st.pop();
 st.display();
 st.pop();