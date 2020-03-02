// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]


// function randomRemoval(arr) {
//     array = []
//     arr.shift()
//     while (arr.length > 0) {
//         r = Math.floor(Math.random()*arr.length)
//         array.push(arr[r])
//         arr.splice( r, 1 )
//     }
//     return array
// }

// console.log(randomRemoval(collections))

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.





var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.



var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// const minMax = (array) => {
//     let newArray = array.sort((a, b) => a-b)
//     newArray.splice(1, 5)
    
//     return newArray
// }





// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// capitalized = (str) => {
//     newArr = []
//     for (let i=0; i<str.length; i++) {
//         if (i%2===1) {
//             up = str.charAt(i).toUpperCase()
//             newArr.push(up)
//         }

//         else if (i%2===0) {
//             low = str.charAt(i).toLowerCase()
//             newArr.push(low)
//         } 
        
//         else {
//             return "that's not valid"
//         }

//     }
//     return newArr.join("")
// }



var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.


allOriginal = (array1, array2) => {
    newArr = array1.concat(array2)
    newArr = [...new Set(newArr)]
    return newArr
}


var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
