// Exercise 1

let i = 0;
while (i < 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}


let i = 0;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
} while (i < 100);

// Exercise 2

let i = 1;
while (i < 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }
    i++;
}

let i = 1;
do {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }
    i++;
} while (i < 100);

// Exercise 3

let i = 1;

while (i <= 100) {
    let output = "";

    if (i % 3 == 0) {
        output += "Fizz";
    }
    if (i % 5 == 0) {
        output += "Buzz";
    }
    console.log(`${i} ${output}`);
    i++;
}


let x = 1;

do {
    let output = "";

    if (x % 3 ==0) {
        output += "Fizz";
    }

    if (x % 5 == 0) {
        output += "Buzz";
    }
    console.log(`${x} ${output}`);
    x++;
} while (x <= 100);

//Exercise 4

let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i == numberToFind) {
        console.log(`Found ${numberToFind}!`);
        break;
    }

    if (i == n) {
    console.log(`Did not find ${numberToFind} within 1-${n}..`);
    }
}

//Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "Fizz";
    }

    if (i % buzzDivisor == 0) {
        output += "Buzz";
    }

    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);