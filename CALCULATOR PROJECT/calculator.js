let btn = document.querySelectorAll('.btn')
let val = document.querySelector('.display');
let clr = document.querySelector('.clear');
let eql = document.querySelector('.equal');



//firsty I creating a variable we show to result and it's empty FOR NOW;

let result = ""

// it's here counts to progress and both are null FOR NOW 
let num1 = null;
let num2 = null;

//I Will add event to every button beacuse It's necessary detect to all

btn.forEach(btn => {
    btn.onclick = function() {
        ButtonClick(this.textContent);
    }
})

clr.onclick = ClearButton
eql.onclick = EqualButton;

// I creating a funciton to detect buttons// 
function ButtonClick(char) {
    if(val.textContent === "0") {
        val.textContent = char;
    } else {
        val.textContent += char;

    }

}

// it's for reset progress//
function ClearButton(char) {
    if(val.textContent += char) {
        val.textContent = "0";
    } else {
        
    }
}


// // Switch-case used here to connect operator with its calculation

function EqualButton() {
    let experssion = val.textContent;
    let operator;

    if(experssion.includes("+")) operator = "+";
    else if(experssion.includes("-")) operator = "-";
    else if(experssion.includes('/')) operator = '/';
    else if(experssion.includes('*')) operator = '*';
    
    
    let parts = experssion.split(operator);
    num1 = parseFloat(parts[0]);
    num2 = parseFloat(parts[1]);
 


switch(operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
        
    case '/':
        result = num1 / num2;
        break;
        
    case '*':
        result = num1 * num2;
        break;    
}

val.textContent = result;
}
