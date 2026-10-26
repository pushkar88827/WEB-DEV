let sum = 0;

function sumof(n) {
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumof(5));