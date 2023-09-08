const displayEl = document.querySelector('.calculator-screen');

const acEl = document.querySelector('.all-clear');
const percentEl = document.querySelector('.percent');
const divideEl = document.querySelector('.divide');
const larrEl = document.querySelector('.larr');

const num7El = document.querySelector('.num7');
const num8El = document.querySelector('.num8');
const num9El = document.querySelector('.num9');
const timesEl = document.querySelector('.times');

const num4El = document.querySelector('.num4');
const num5El = document.querySelector('.num5');
const num6El = document.querySelector('.num6');
const minusEl = document.querySelector('.minus');

const num1El = document.querySelector('.num1');
const num2El = document.querySelector('.num2');
const num3El = document.querySelector('.num3');
const plusEl = document.querySelector('.plus');

const num0El = document.querySelector('.zero');
const decimalEl = document.querySelector('.decimal');
const equalEl = document.querySelector('.equal');

const numElArray = [ // we are creating an array for the numbers
    num0El, num1El, num2El, num3El, num4El,
    num5El, num6El, num7El, num8El, num9El
];

// Functions

// This function can be explained as --
const getDisplayAsStr = () => displayEl.textContent.split(',').join('');
/*
const getDisplayAsStr = () => {
    const currentDisplayStr = displayEl.textContent;
    return currentDisplayStr.split(',').join(''); //This will get rid of the commas
} 
*/

const getDisplayAsNum = () => { //we want to use it as number
    return parseFloat(getDisplayAsStr())
}

const handleNumberClick = (numStr) => { // the parameter here is a string representation of a number not a number
    const currentDisplayStr = getDisplayAsStr();
    if (currentDisplayStr === '0'){
        displayEl.textContent = numStr;
    } else {
        displayEl.textContent = parseFloat(currentDisplayStr + numStr).toLocaleString(); //we updating the displayEl.textContent 
    }
};


//Adding Event Listeners to numbers
for (let i = 0; i < numElArray.length; i++){
    const numberEl = numElArray[i];
    numberEl.addEventListener('click', () => { // we will add an event listener on the numberEl
        handleNumberClick(i.toString());
    })
}

//Adding Event Listeners to the decimal
decimalEl.addEventListener('click', () => {
    const currentDisplayStr = getDisplayAsStr();
    if(!currentDisplayStr.includes('.')){
        displayEl.textContent = currentDisplayStr + '.';
    }
});