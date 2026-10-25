const favMovie = "Avatar";

let guess = prompt("What is my favorite movie?");

while (guess !== favMovie) {
  guess = prompt("What is my favorite movie?");
}

console.log("Congratulations! You guessed it right.");