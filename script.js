var displayDiv = document.querySelector("#display");
var num1 = 0;
var num2 = '';
var newValue = true;
var OP = '';
var calculationMade = false;
var newValueNeeded = false;

function press(num){
    if(newValueNeeded === true) {
        newValueNeeded = false;
        if(displayDiv.innerHTML === '0' || displayDiv.innerHTML === num1){
            displayDiv.innerHTML = '';
        }
    } else {
        if(displayDiv.innerHTML === '0' || displayDiv.innerHTML === num1){
            displayDiv.innerHTML = '';
        }
    }
    displayDiv.innerHTML += num;
}

function setOP(operator) {
    if(!calculationMade){
        OP = operator;
        num1 = displayDiv.innerHTML;
        displayDiv.innerHTML = num1;
    } else {
        OP = operator;
        num1 = displayDiv.innerHTML;
        displayDiv.innerHTML = num1;
        calculationMade = false;
    }
    newValueNeeded = true;
}

function calculate() {
    if(newValueNeeded === true){
        alert('Please enter a new value...');
        return;
    } else if(!calculationMade){
        num2 = displayDiv.innerHTML;
        calculationMade = true;
    }

    if (OP === '*'){
        displayDiv.innerHTML = num1*num2;
    } else if (OP === '/'){
        displayDiv.innerHTML = num1/num2;
    } else if (OP === '+'){
        displayDiv.innerHTML = parseFloat(num1)+parseFloat(num2);
    } else if (OP === '-'){
        displayDiv.innerHTML = num1-num2;
    } else {
        alert('Please select an operator...');
    }
    console.log(`${num1} ${OP} ${num2} = ${displayDiv.innerHTML}`);
    num1 = displayDiv.innerHTML;
}

function clr(){
    displayDiv.innerHTML = '0';
    var num1 = 0;
    var num2 = '';
    var OP = '';
    calculationMade = false;
}