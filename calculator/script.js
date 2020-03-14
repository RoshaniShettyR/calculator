const numbers=document.querySelectorAll(".numbers");
numbers.forEach(
    (numbers)=>{
        numbers.addEventListener("click",(event)=>{
            inputNumber(event.target.value);
            updateScreen(currentInput);
        })
    }
)

const calculator=document.querySelector(".calculator-screen");
const updateScreen=(numbers)=>{
    calculator.value=numbers;
}

let prevInput="0";
let calculationOperatoR=" ";
let currentInput="0";

const inputNumber=(numbers)=>{
    if(currentInput==="0"){
        currentInput=numbers;
    }else{
    currentInput+=numbers;
}
}
const operator=document.querySelectorAll(".operator");
operator.forEach(
    (operator)=>{
        operator.addEventListener("click",(event)=>{
            inputOperator(event.target.value);
        })
    })

const inputOperator=(operator)=>{
    prevInput=currentInput;
    calculationOperatoR=operator;
    currentInput="0";
}

const equalSign=document.querySelector(".equal-sign");
        equalSign.addEventListener("click",()=>{
            calculate()
            updateScreen(currentInput)
        })
const calculate=()=>{
let result=0
switch(calculationOperatoR){
    case '+':
        result=parseInt(prevInput)+parseInt(currentInput);
        break
    case '-':
        result=parseInt(prevInput)-parseInt(currentInput);
        break
    case '*':
        result=parseInt(prevInput)*parseInt(currentInput);
        break
    case '/':
        result=parseInt(prevInput)/parseInt(currentInput);
        break
    default:
        return
}
currentInput=result.toString()
calculationOperatoR=' '
}
const clear=document.querySelector(".all-clear");
        clear.addEventListener("click",()=>{
            updateScreen("0");
        })
