// Example 1: सभी हिस्से खाली हैं
for (;;) {
  console.log("Example 1");
}

// Example 2: condition हमेशा true है
for (; true;) {
  console.log("Example 2");
}

// Example 3: counter बढ़ता है, लेकिन condition उसे रोकती नहीं
for (let i = 0; i >= 0; i++) {
  console.log(i);
}

// Example 4: condition में गलती — i को घटाया जा रहा है,
// जबकि loop तब तक चलता है जब i >= 0 हो
for (let i = 0; i >= 0; i--) {
  console.log(i);
}