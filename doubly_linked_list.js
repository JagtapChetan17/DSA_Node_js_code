class Node {
  constructor(n) {
    this.data = n;
    this.next = null;
    this.prev = null;
  }
}

class Doubly {
  constructor() {
    this.head = null;
  }

  create(n) {
    let nn = new Node(n);
    if (this.head == null) {
      this.head = nn;
      this.last = nn;
    } else {
      this.last.next = nn;
      nn.prev = this.last;
      this.last = nn;
    }
  }

  display() {
    this.temp = this.head;
    let str = "";
    while (this.temp != null) {
      str += this.temp.data;
      this.temp = this.temp.next;
      if (this.temp != null) {
        str += "<->";
      }
    }
    console.log(str);
  }

  insertAtBeg(n) {
    let nn = new Node(n);
    if (this.head == null) {
      this.head = nn;
      this.last = nn;
    } else {
      nn.next = this.head;
      nn.prev = null;
      this.head = nn;
    }
  }

  insertAtEnd() {
    let nn = new Node(n);
    if (this.head == null) {
      this.head = nn;
      this.last = nn;
    } else {
      this.last.next = nn;
      nn.prev = this.last;
      this.last = nn;
    }
  }

  insertAtPos(n, pos) {
    let nn = new Node(n);
    let count = 0;
    this.temp = this.head;
    if (this.head == null) {
      this.head = nn;
      this.last = nn;
    } else {
      while (this.temp != null) {
        count++;
        this.temp = this.temp.next;
      }
    //   console.log(count);
      this.temp = this.head;
      if (pos < 0 || pos > count) {
        console.log("Position doesnot exists.");
      } else {
        for (let i = 1; i < pos - 1; i++) {
          this.temp = this.temp.next;
        }
        // console.log(this.temp.data);
        nn.next = this.temp.next;
        this.temp.next = nn;
        this.temp.next.prev = nn;
        nn.prev = this.temp;
      }
    }
  }

  countNodes() {
    let count = 0;
    this.temp = this.head;
    while (this.temp != null) {
      this.temp = this.temp.next;
      count++;
    }
    console.log("Total Nodes:", count);
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
        counter++;
        this.temp = this.temp.next;
      }
      console.log("Data not found!");
    }
  }

  deleteAtBeg() {
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      this.temp = this.head;
      this.head = this.head.next;
      delete this.temp;
      this.head.prev = null;
    }
  }

  deleteAtEnd() {
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      this.temp = this.head;
      while (this.temp.next.next != null) {
        this.temp = this.temp.next;
      }
      this.last = this.temp;
      this.temp = this.temp.next;
      delete this.temp;
      this.last.next = null;
    }
  }

  deleteAtPos(pos) {
    let count = 0;
    this.temp = this.head;
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      if (pos == 1) {
        this.head = this.head.next;
        delete this.temp;
        this.head.prev = null;
      } else {
        while (this.temp != null) {
          this.temp = this.temp.next;
          count++;
        }
        console.log(count);
        if (pos < 0 || pos > count) {
          console.log("Position doesnot exists.");
        } else {
          if (pos == count) {
            this.last.prev.next = null;
            this.last = this.last.prev;
          } else {
            this.temp = this.head;
            for (let i = 1; i < pos - 1; i++) {
              this.temp = this.temp.next;
            }
            this.temp.next = this.temp.next.next;
            this.temp.next.prev = this.temp.next.prev.prev;
          }
        }
      }
    }
  }

  deleteByVal(key) {
    this.temp = this.head;
    // console.log(key);
    if (this.head == null) {
      console.log("Linked list has not been created yet.");
    } else {
      while (this.temp != null) {
        if (this.temp.data == key) {
          this.temp.prev.next = this.temp.next;
          delete this.temp;
          return;
        } else {
          this.temp = this.temp.next;
        }
      }
      console.log("Data was not found for deletion.");
    }
  }

  reverse() {
    let str = "";
    this.temp = this.last;
    while (this.temp != null) {
      str += this.temp.data;
      this.temp = this.temp.prev;
      if (this.temp != null) {
        str += "<->";
      }
    }
    console.log(str);
  }
}

const prompt = require("prompt-sync")();
const db = new Doubly();
let n, pos, key, ch;
while (1) {
  console.log(
    "1.Create\n2.Display\n3.Insert at beginning\n4.Insert at end\n5.Insert at pos\n6.Count\n7.Search a data\n8.Delete at beginning\n9.Delete at end\n10.Delete at pos\n11.Delete by value\n12.Reverse\n0.Exit"
  );
  ch = prompt("Enter choice: ");
  ch = parseInt(ch); //Each prompt accepted from user is accepted as a string so we have to typecast it into integer first.
  switch (ch) {
    case 1:
      n = prompt("Enter node data: ");
      n = parseInt(n);
      db.create(n);
      break;
    case 2:
      db.display();
      break;
    case 3:
      n = prompt("Enter node data: ");
      n = parseInt(n);
      db.insertAtBeg(n);
      break;
    case 4:
      n = prompt("Enter node data: ");
      n = parseInt(n);
      db.insertAtEnd(n);
      break;
    case 5:
      n = prompt("Enter node data: ");
      n = parseInt(n);
      pos = prompt("Enter position: ");
      pos = parseInt(pos);
      db.insertAtPos(n, pos);
      break;
    case 6:
      db.countNodes();
      break;
    case 7:
      key = prompt("Enter data to be searched: ");
      key = parseInt(key);
      db.search(key);
      break;
    case 8:
      db.deleteAtBeg();
      break;
    case 9:
      db.deleteAtEnd();
      break;
    case 10:
      pos = prompt("Enter position to be deleted: ");
      pos = parseInt(pos);
      db.deleteAtPos(pos);
      break;
    case 11:
      key = prompt("Enter value to be deleted: ");
      key = parseInt(key);
      db.deleteByVal(key);
      break;
    case 12:
      db.reverse();
      break;
    case 0:
      console.log("Exited successfully!");
      return 0;
    default:
      console.log("Invalid choice. Please try again!!");
      break;
  }
}
