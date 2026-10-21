let numbers = [10, 20, 30, 40, 50];

let removed = numbers.splice(1, 2);

console.log(removed);
console.log(numbers);



//Adding elements to an array using splice()

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 0, "Mango");

console.log(fruits);


//replacing elements in an array using splice()
let colors = ["Red", "Blue", "Green"];

colors.splice(1, 1, "Yellow");

console.log(colors);


