//Question 1
/*Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace 
on either side of the string, and print the value to the console.
*/

//Answer
let favDrink = " Malta Guinness from Melcom " 
favDrink = favDrink.trim()
console.log(favDrink)



//Question 2 
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

//Answer
let multipleWords = 'cake water apple sugar';
console.log(multipleWords.includes('apple'))

//Alternative Answer
let str = 'Bob dog sugar apple';
if (str.search('apple') !== -1){ // if this search do not find apple, it will return -1, but if it finds apple, then is not equal to -1 (!== -1)
    console.log('yes')
}else {
    console.log('no')
}



//Question 3
//Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console.

//Answer

let myFavHoliday = 'Easter';
console.log(myFavHoliday.toUpperCase())



//Question 4
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN).

//Answer
let myName = 'Washintong';
alert (myName.slice(-3));



//Question 5
//Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

//Answer
function subAndAlert(a,b,c,d,e){
    let solveIt = 100 - a - b - c - d - e;
    alert (Math.abs(solveIt))
}
subAlert(3, 6, 13, 8, 10)

//Alternative Answer
let solveIt = (a,b,c,d,e) => {
    100 - a - b - c - d - e;
    alert (Math.abs(solveIt))
}
solveIt(3, 6, 13, 8, 10)




//Question 6
//Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

//Answer
function findHighAndLowValues(num1, num2, num3){
    let min = Math.min(num1,num2,num3);
    let max = Math.max(num1,num2,num3);
    console.log(`The lowest num is ${min} and the highest num is ${max}`)
}
findHighAndLowValues(11, 2, 4)


//Question 7
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

//Answer
function headOrTails(){
    let result = Math.random()
    if (result > .5){
        return 'Head';
    } else {
        return 'Tail'
    }
}

//Alternative Answer
const headOrTails = _ => Math.random() < 0.5? 'Head' : 'Tail';
console.log(Math.random())

//Follow-up from Question 7
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times 
//where x is the number passed into the function. Call the function.

Answer
function flipFlip(x){
    for (let i = 1; i <= x; i++){
        let answer = headOrTails()
        console.log(answer)
    }
}
flipFlip(4)




//Question 8
//Create a function that takes in an array of numbers and return a new array containing every even 
//number from the original array (do not use map or filter).

Answer
function arrOfEvenNum(arr){
    let newArr = [];
    for (let i = 0; i < arr.length ; i++){
        if(i % 2 === 0){
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(arrOfEvenNum([1,2,3,4,5,6,7,9,10,22,11,12]))


//Alternative Answer
function onlyEvens(nums){
    let evens = []
    nums.forEach(n => {
        if (n % 2 === 0){
            evens.push(n)
        }
    })
    return evens
}
console.log(onlyEvens([1,2,3,4,5,6,7,9,10,22,11,12])) // [2,4,6,10,22,12]

