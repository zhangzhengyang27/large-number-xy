import add from "./src/index.js"

// Test case 1: Adding two single-digit numbers
console.log(add("5", "7")) // Output: 12

// Test case 2: Adding two multi-digit numbers
console.log(add("123", "456")) // Output: 579

// Test case 3: Adding a single-digit number and a multi-digit number
console.log(add("9", "99")) // Output: 108

// Test case 4: Adding two empty strings
console.log(add("", "")) // Output: 0

// Test case 5: Adding a single-digit number and an empty string
console.log(add("3", "")) // Output: 3
