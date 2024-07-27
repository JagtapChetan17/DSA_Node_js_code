class Node {
  constructor(n) 
{
    this.data = n;
    this.next = null;
  }
}

class linkedlist
 {
  constructor() 
{
    this.head = null;
  }

  create(n) 
{
    let nn = new Node(n);
    if (this.head == null)
	 {
         this.head = nn;
         this.last = nn;
         } 
  else
   {
      this.last.next = nn;
      this.last = nn;
    }
  }

  display()
 {
    this.temp = this.head;
    let str = "";
    if (this.head == null) 
{
      console.log("Linked list has not been created yet.");
    }
    while (this.temp != null) {
      
      console.log(this.temp.data);
      this.temp = this.temp.next;
      if (this.temp != null) {
        str += "->";
      }
    }
    
  }

  InsertAtBeg(n) 
{
    let nn = new Node(n);
    if (this.head == null) 
{
      this.head = nn;
      this.last = nn;
    }
 else
 {
      nn.next = this.head;
      this.head = nn;
    }
  }

  InsertAtPos(n, pos) 
{
    let nn = new Node(n);
    let count = 0;
    let i;
    this.temp = this.head;
    if (this.head == null) {
      this.head = nn;
      this.last = nn;
    } 
else
 {
      while (this.temp != null) {
        this.temp = this.temp.next;
        count++;
      }
      this.temp = this.head;
      if (pos < 0 || pos > count) 
{
        console.log("Position doesnot exists.");
      } else {
        for (i = 1; i < pos - 1; i++) {
          this.temp = this.temp.next;
        }
        nn.next = this.temp.next.next;
        this.temp.next = nn;
      }
    }
  }

  InsertAtEnd(n) {
    let nn = new Node(n);
    if (this.head == null) {
      this.head = nn;
      this.last = nn;
    } else {
      this.last.next = nn;
      this.last = nn;
    }
  }

  count() {
    this.temp = this.head;
    let counter = 0;
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      while (this.temp != null) {
        this.temp = this.temp.next;
        counter++;
      }
      console.log("Total nodes are:", counter);
    }
  }

  search(key) {
    this.temp = this.head;
    let counter = 1;
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      while (this.temp != null) {
        if (this.temp.data == key) {
          console.log("Data found at", counter, "position");
          return;
        }
        this.temp = this.temp.next;
        counter++;
      }
      console.log("Data not found!");
    }
  }

  DeleteAtBeg() {
    this.temp = this.head;
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      this.head = this.head.next;
    }
  }

  DeleteAtEnd() {
    this.temp = this.head;
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      while (this.temp.next.next != null) {
        this.temp = this.temp.next;
      }
      this.last = this.temp;
      this.last.next = null;
    }
  }

  DeleteAtPos(pos) {
    this.temp = this.head;
    let count = 0;
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      while (this.temp != null) {
        this.temp = this.temp.next;
        count++;
      }
      if (pos < 0 || pos > count) {
        console.log("Position does not exists.");
      } else {
        this.temp = this.head;
        for (let index = 1; index < pos - 1; index++) {
          this.temp = this.temp.next;
        }
        this.temp.next = this.temp.next.next;
      }
    }
  }

  DeletByVal(key) {
    this.temp = this.head;
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      if (this.temp.data == key) {
        this.head = this.head.next;
      } else {
        while (this.temp != null) {
          if (this.temp.next.data == key) {
            this.temp.next = this.temp.next.next;
            return;
          }
          this.temp = this.temp.next;
        }
      }
      console.log("Data was not found for deletion.");
    }
  }
}
const prompt = require("prompt-sync")();
const ll = new linkedlist();
let n, pos, key, ch;
while (1) {
  console.log(
    "1.Create\n2.Display\n3.Insert at beginning\n4.Insert at end\n5.Insert at pos\n6.Count\n7.Search a data\n8.Delete at beginning\n9.Delete at end\n10.Delete at pos\n11.Delete by value\n12.Exit"
  );
  ch = prompt("Enter choice: ");
  ch = parseInt(ch); //Each prompt accepted from user is accepted as a string so we have to typecast it first.
  switch (ch) {
    case 1:
      n = prompt("Enter node data: ");
      n = parseInt(n);
      ll.create(n);
      break;
    case 2:
      ll.display();
      break;
    case 3:
      n = prompt("Enter node data: ");
      n = parseInt(n);
      ll.InsertAtBeg(n);
      break;
    case 4:
      n = prompt("Enter node data: ");
      n = parseInt(n);
      ll.InsertAtEnd(n);
      break;
    case 5:
      n = prompt("Enter node data: ");
      n = parseInt(n);
      pos = prompt("Enter position to insert: ");
      pos = parseInt(pos);
      ll.InsertAtPos(n, pos);
      break;
    case 6:
      ll.count();
      break;
    case 7:
      key = prompt("Enter data to be searched: ");
      key = parseInt(key);
      ll.search(key);
      break;
    case 8:
      ll.DeleteAtBeg();
      break;
    case 9:
      ll.DeleteAtEnd();
      break;
    case 10:
      pos = prompt("Enter position to be deleted: ");
      pos = parseInt(pos);
      ll.DeleteAtPos(pos);
      break;
    case 11:
      key = prompt("Enter data to be deleted: ");
      key = parseInt(key);
      ll.DeletByVal(key);
      break;
    
    case 12:
      console.log("Program exited successfully.");
      exit(0);
    default:
      console.log("INVALID CHOICE-- PLEASE TRY AGAIN!!");
      break;
  }
}
