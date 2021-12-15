const readLine = require("readline")

const reader = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})

// reader.question("What is your favorite food?", function(answer) {

//     console.log(`The best food is ${answer}`)
    

// })


reader.question("What is your age?", function(number) {
    let newAge = number + 3
    console.log(`You will be ${newAge} in 3 years.`)
    

})

