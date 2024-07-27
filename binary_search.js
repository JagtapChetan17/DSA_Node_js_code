let recursiveFunction = function (arr, x, start, end) {

    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
        console.log("Element found at: " + (mid + 1))
         return true;
    }
    if (arr[mid] > x) 
        return recursiveFunction(arr, x, start, mid - 1); 
    else 
        return recursiveFunction(arr, x, mid + 1, end);
}
let arr = [1, 10, 5, 6, 8, 9]; let x = 6;
if (recursiveFunction(arr, x, 0, arr.length - 1)) 
    console.log (); 
else 
    console.log ("Element not found!<br>"); 
x = 10; 
if (recursiveFunction(arr, x, 0, arr.length - 1)) 
    console.log (); 
else 
console.log ("Element not found!<br>");  
