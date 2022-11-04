//All Rights Reserved © Victor Faruna
//Creation Date: 28/10/2022
//Last Modified: 28/10/2022


//display variable assignment...
var display = document.querySelector("input");


//Creating the input function....
function input(num) {
  var initValue = display.value; //returns initial input value when function is fired.
  //validate display font size in relation to the display value length
  if(initValue.length > 10) {
    display.style.fontSize = "40px";
  }
  //Validating a Non-Zero start...
  if (initValue == "0" && num != ".") {
   initValue = ""; 
  }
  if (num == "."){ //basic calculator functions...
    if (initValue[0] == 0) {
      num = "";
    }
  }
  var result1 = initValue+num;
  display.setAttribute("value", result1);// displays the final result...
}


//Creating a cancel / backspace  function...
function cancel() {
  var initValue = display.value;
  
  if(initValue.length < 10) {
    display.style.fontSize = "50px";
  }
  
  if (initValue.length == 1) {
    display.setAttribute("value", 0);
  }
  else {
    newValue = initValue.slice(0, -1);
    display.setAttribute("value", newValue);
  }
}

//Creating a Clear() function...
function clearValue() {
  var initValue = display.value;
  
  if(initValue.length > 10) {
    display.style.fontSize = "50px";
  }
  var defaultValue = 0;
  console.log(defaultValue);
  display.setAttribute("value", defaultValue);
}


//Creating the main calculating system for final display value
//*Decided to settle for eval() function*

function result() {
  var initQuery = display.value;
  var res = eval(initQuery);
  display.setAttribute("value", res);
  console.log(res);
}



//Theme change functions...
function changeTheme() {
  var css = document.querySelector("link");
  var initTheme = css.getAttribute("href");
  if (initTheme == "light.css") {
    css.setAttribute("href", "dark.css");
  }
  else if (initTheme == "dark.css") {
    css.setAttribute("href", "light.css")
  }
}

//Navigating to  currency converter...
function toggleCurConv() {
  var curConvCont = document.querySelector(".cur-conv-cont");
  curConvCont.style.display = "block";
}

function closeCurConv() {
  var curConvCont = document.querySelector(".cur-conv-cont");
  curConvCont.style.display = "none";
}

function car = ("me") => {
  var name = "car";
}

//All Rights Reserved © Victor Faruna

