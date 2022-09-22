//Question 1
//Create an array of numbers. Sum all of the numbers. Alert the sum.

//Answer
let nums = [10, 20, 30, 50]
sum = nums.reduce((acc, current) => acc + current, 0)
alert(sum)

//Alternative Answer
let num = [10, 20, 30, 50]
let sum = 0
for (let i = 0; i < nums.length; i++){
    alert (sum = sum + nums[i])
} 



//Question 2
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the 
//sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

//Answer
function compareSquareAndCube(a,b){
return a.reduce((acc,c) => acc + c**2, 0) > b.reduce((acc, c) => acc + c**3, 0)
}

console.log(compareSquareAndCube([2, 2, 2], [2, 2, 2]))



//Question 3
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. 
//Return your answer as a number.

//Answer
function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + c, 0)
}
console.log(sumOfValues([2,'1',5,4,'2'])) 


//Follow-up from question 3
//what about if we want it to be summation not concatenation:

function sumOfValues(arr){
    return arr.reduce((acc, c) => +acc+ + c, 0)
}
console.log(sumOfValues([2, '1', 5, 4, '2']))



//Question 4
//Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, 
//find the missing element. Please note, there may be duplicates in the arrays, so checking if a numerical value exists 
//in one and not the other is not a valid solution.

//Answer
const summ = arr => arr.reduce((a, b) => a + b)
const findMissingNumber = (arr1, arr2) => sum(arr1) - sum(arr2)

findMissingNumber([1, 2, 2, 3], [1, 2, 3])



