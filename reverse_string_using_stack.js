//Reverse string using stack
class Stack{
    size;
    top;
    arr = [];
    constructor(n)
    {
        this.top = -1;
        this.size = n;
        this.arr = new Array(this.size);
    }

    isEmpty()
    {
        return(this.top == -1);
    }

    push(n)
    {
        if(this.top >= this.size)
        {
            console.log("Stack overflow!");
            return;
        }
        else
        {
            this.arr[++this.top] = n;
        }
    }

    pop()
    {
        if(this.top == -1)
        {
            console.log("Stack overflow!");
            return;
        }
        else
        {
            let x = this.arr[this.top--];
            return x;
        }
    }
}

    function reverse(str) {
        let n = str.length;
        let obj = new Stack(n);
        for(let i=0; i<n; i++)
        {
            obj.push(str[i]);
        }

        for(let i=0; i<n; i++)
        {
            let ch = obj.pop();
            str[i] = ch;
        }
    }

let str = "sinhagadcollege".split("");
reverse(str);
console.log("Reversed string is:", str.join(""));