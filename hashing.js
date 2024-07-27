class HashTable {
    constructor() {
        this.values = {}; this.length = 0; this.size = 0;
    }
    calculateHash(key) {
        return key.toString().length % this.size;
    }
    add(key, value) {
        const hash =
            this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++;
        }
        this.values[hash][key] = value;
    }
    search(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) &&
            this.values[hash].hasOwnProperty(key)) {
                console.log(key + " received :");
            return this.values[hash][key];
        } else {
            return null;
        }
    }
}
const ht = new HashTable(); 
ht.add("simca", "300");
ht.add("siom", "100"); 
ht.add("samruddhi ", "50");
console.log(ht.search("samruddhi "));
