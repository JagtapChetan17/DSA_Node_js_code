function maxWater(arr, n) {
    let res = 0;
    for (let i = 1; i < n - 1; i++) {
        let left = arr[i]; for (let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }
        let right = arr[i];
        for (let j = i + 1; j < n; j++) {
            right = Math.max(right, arr[j]);
        }
        res += Math.min(left, right) - arr[i];
    }
    console.log("maximum water value will be: ")
    console.log(res);
}
let arr = [1, 0, 4, 2, 1, 1, 3, 0, 1, 2, 1];
let n = arr.length;
maxWater(arr, n);           