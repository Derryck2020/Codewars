//Pesueduocode;
//accept user inputs of number, operator and other number
//accept decimal numbers
//store inputs
//recognize inputs and perform calculations
//return a result
//should accept longer arithmetic operations
//display inputs as it is entered
//stores previous total as start of next operation
//AC button should clear all entries

/*const keys = document.querySelector('.calculator-keypads'); // This will listen to any clicks within the calculator-keypads class container
    keys.addEventListener('click', process =>{
        const {target} = process; //We are deconstruting event and extracting the target property
        const {value} = target;
        if (!target.matches('button')){ //If we click something other than a button within the .calculator-keypads, 
            return; // the function wont run
        } else {
            calculator.parseInput(value)
            //console.log(target)
            
        }
    })


const calculator = {
    displayText:'0',
    previousTotal: null,

    parseTotal(value){
        //have any of the "special buttons" ie "=", "AC", ".", been clicked we want these actions to happen
        switch(value){
            case '=':
                //calculate the answer
                break;
            case 'AC':
                //clear screen and stored values
                break;
            case '.':
                if (this.displayText == 0){
                    //pass '0.' into add text method
                }else {
                    //add value to text string
                }
                break;
            default:
                //add value to text string
                break;
        }

    },
    
    addText(value){
        if (this.displayText === '0'){
            this.displayText = ''
        } else if (this.previousTotal !== null){ //If our previousTotal is not null, 
            this.displayText = this.previousTotal // we want to change the displayText to include the previousTotal
            this.previousTotal = null
        }else if (isNaN(+(value)) && isNaN(+(this.displayText))){ //To check if the user enters two invalid operators, if the last character entered is not a character
            if(isNan(this.displayText.slice(-1))){
                return;
            }
        }
        this.displayText += value
        //output display text to screen
    },
}*/

let displayText = document.getElementById('calculator-screen');

let buttons = Array.from(document.getElementsByClassName('press'));

buttons.map( el =>{
    el.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                displayText.innerText = '';
                break;
            
            case '=':
                displayText.innerText = eval(displayText.innerText);
                break;

            default:
                displayText.innerText += e.target.innerText;
                break;
            }

        });
});

