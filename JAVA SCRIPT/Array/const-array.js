// 1. const array declare karna
const arr = [10, 20, 30];

// 2. Elements change kar sakte ho
arr[0] = 100;
arr.push(40);

console.log(arr); // [100, 20, 30, 40]

// 3. Naya array assign nahi kar sakte
// arr = [1, 2, 3]; // TypeError