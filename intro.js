

var array = [1, 4, 11, 2, 37, -4]

// oneliner
// console.log(`Largest number: ${Math.max(...array)}, Smallest number: ${Math.min(...array)}`)



// for loop version

let smallest = array[0]
let largest = array[0]

for (let i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
        smallest = array[i]
        
    } else if (largest < array[i]) {
        largest = array[i]
        
    }
}
console.log(smallest, largest)