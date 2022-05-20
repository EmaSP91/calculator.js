/*document.getElementById("myBtn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";*/

let outputEl = document.querySelector(".output");
let outputidEl = document.querySelector("#ouputid");


//Storing in variables

let number0 = document.querySelector("#num0");
let number1 = document.querySelector("#num1");
let number2 = document.querySelector("#num2");
let number3 = document.querySelector("#num3");
let number4 = document.querySelector("#num4");
let number5 = document.querySelector("#num5");
let number6 = document.querySelector("#num6");
let number7 = document.querySelector("#num7");
let number8 = document.querySelector("#num8");
let number9 = document.querySelector("#num9");

let sumEl = document.querySelector("#sum");
let subtractEL = document.querySelector("#subtract");
let multiplyEl = document.querySelector("#multiply");
let divideEl = document.querySelector("#divide");
let equalsEl = document.querySelector("#equals");
let dotEl = document.querySelector("#dot");

let deletingEl = document.querySelector("#delete");

//Function that will delete the input

deletingEl.addEventListener("click", function(){
    let deleting = "";
    outputEl.textContent= deleting;
    

})


//Functions that will display the numbers on screen

 number0.addEventListener("click", function(){
     let number = 0;
     outputEl.textContent+= number;
     

 })


 number1.addEventListener("click", function(){
    let number = 1;
    outputEl.textContent+= number;
    

})


number2.addEventListener("click", function(){
    let number = 2;
    outputEl.textContent+= number;
    

})


number3.addEventListener("click", function(){
    let number = 3;
    outputEl.textContent+= number;
    

})




number4.addEventListener("click", function(){
    let number = 4;
    outputEl.textContent+= number;
    

})

number5.addEventListener("click", function(){
    let number = 5;
    outputEl.textContent+= number;
    

})


number6.addEventListener("click", function(){
    let number = 6;
    outputEl.textContent+= number;
    

})

number7.addEventListener("click", function(){
    let number = 7;
    outputEl.textContent+= number;
    

})

number8.addEventListener("click", function(){
    let number = 8;
    outputEl.textContent+= number;
    

})


number9.addEventListener("click", function(){
    let number = 9;
    outputEl.textContent+= number;
    

})

//Funtions that will display 

sumEl.addEventListener("click", function(){
    let sum = "+";
    outputEl.textContent+= sum;
    

})


subtractEL.addEventListener("click", function(){
    let subtract = "-";
    outputEl.textContent+= subtract;
    

})


multiplyEl.addEventListener("click", function(){
    let multiply = "*";
    outputEl.textContent+=multiply;
    

})



divideEl.addEventListener("click", function(){
    let divide= "/";
    outputEl.textContent+=divide;
    

})


dotEl.addEventListener("click", function(){
    let dot = ".";
    outputEl.textContent+= dot;
    

})

//Function that will show the result

equalsEl.addEventListener("click", function(){
    
    let equals= outputEl.textContent;
    let result = eval(equals);
    outputEl.textContent= result;
    

})

