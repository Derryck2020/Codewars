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
if (str.search('apple') !== -1){ // if this search did not find apple, it will return -1, but if it finds apple, then is not equal to -1 (!== -1)
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
function subAlert(a,b,c,d,e){
    let solveIt = 100 - a - b - c - d - e;
    alert (Math.abs(solveIt))
}
subAlert(3, 6, 13, 8, 10)

//Alternative Answer
let solveIt = (a,b,c,d,e) => {
    100 - a - b - c - d - e;
    alert (Math.abs(solveIt))
}

