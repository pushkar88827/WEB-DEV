// 1. Creating a nested array
const arr = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log("Nested Array:", arr);

// 2. Accessing elements
console.log("First row:", arr[0]);
console.log("Element:", arr[0][1]); // 20
console.log("Element:", arr[1][2]); // 60

// 3. Changing elements
arr[0][1] = 100;
console.log("After changing:", arr);

// 4. Adding elements
arr[0].push(200);
arr.push([11, 22, 33]);
console.log("After adding:", arr);

// 5. Traversing using nested loops
console.log("All elements:");

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

// 6. Matrix example
const matrix = [
    [1, 2],
    [3, 4]
];

console.log("Matrix element:", matrix[1][0]); // 3

// 7. Nested array reference and shallow copy
const original = [[1, 2], [3, 4]];
const copy = [...original];

copy[0][0] = 100;

console.log("Original:", original);
console.log("Copy:", copy);

// Both show [[100, 2], [3, 4]]
