// 1. Array reference
let arr1 = [10, 20, 30];
let arr2 = arr1;

arr2.push(40);

console.log("arr1:", arr1);
console.log("arr2:", arr2);

// 2. Changing array elements
let a = [1, 2, 3];
let b = a;

b[0] = 100;

console.log("a:", a);
console.log("b:", b);

// 3. Spread operator creates a shallow copy
let original = [1, 2, 3];
let copy = [...original];

copy.push(4);

console.log("Original:", original);
console.log("Copy:", copy);

// 4. slice() creates a shallow copy
let numbers = [5, 10, 15];
let numbersCopy = numbers.slice();

numbersCopy.push(20);

console.log("Numbers:", numbers);
console.log("Numbers copy:", numbersCopy);

// 5. Comparing array references
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = x;

console.log(x === y); // false
console.log(x === z); // true

// 6. Shallow copy with nested arrays
let nested = [[1, 2], [3, 4]];
let nestedCopy = [...nested];

nestedCopy[0].push(99);

console.log("Nested:", nested);
console.log("Nested copy:", nestedCopy);