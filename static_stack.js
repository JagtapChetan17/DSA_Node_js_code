class Stack
{
    constructor()
    {
        this.items = [];
    }

    push(element)
    {
        this.items.push(element);
        console.log("Pushed:", this.items[this.items.length-1]);
    }   

    isEmpty()
    {
        return this.items.length == 0;
    }

    pop()
    {
        if(this.isEmpty())
        console.log("Stack underflow!!Cannot pop!");
        else
        console.log("Popped:", this.items.pop());
    }

    peek()
    {
        if(this.isEmpty())
        console.log("Stack underflow!!Cannot peek!");
        else
        console.log("Top element:", this.items[this.items.length- 1]);
    }

    display()
    {
        if(this.isEmpty())
        console.log("Stack underflow!!Cannot display!");
        else
        for(let i = this.items.length-1; i>=0; i--)
        {
            console.log(this.items[i]);
        }
    }
}
    
const st = new Stack();
st.push(12);
st.push(14);
st.push(19);
st.peek();
st.push(13);
st.push(10);
st.peek();
st.display();
st.pop();
st.pop();
st.pop();
st.pop();
st.peek();
st.pop();
st.pop();
st.display();