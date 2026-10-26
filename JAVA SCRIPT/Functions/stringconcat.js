let words = ["hi", "hello", "bye", "!"];

function concat(words) {
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i];
    }

    return result;
}

console.log(concat(words));