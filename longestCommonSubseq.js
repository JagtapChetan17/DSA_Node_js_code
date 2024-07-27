let X, Y;
function lcs(i, j, count) {
    if (i == 0 || j == 0)
        return count;

    if (X[i - 1] == Y[j - 1]) {
        count = lcs(i - 1, j - 1, count + 1);
    }
    count = Math.max(count,Math.max(lcs(i, j - 1, 0), lcs(i - 1, j, 0)));
    return count;
}

let n, m;

X = "abcdxyez";
Y = "xyzabcyued";

n = X.length;
m = Y.length;
console.log("Lowest Common Subsequence is of: ");
console.log(lcs(n, m, 0) + " Characters");