let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let displayValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "X") {
      buttonText = "*";
      displayValue += buttonText;
      display.value = displayValue;
    } else if (buttonText == "C") {
      displayValue = "";
      display.value = displayValue;
    } else if (buttonText == "=") {
      display.value = eval(displayValue);
    } else if (buttonText == "b") {
      let backspace = displayValue.substring(0, displayValue.length - 1);
      displayValue = backspace;
      display.value = displayValue;

      console.log(backspace);
    } else if (buttonText == "pi") {
      displayValue = parseFloat(Math.PI);
      display.value = displayValue;
      console.log(displayValue);
    } else if (buttonText == "sqrt") {
      let square = Math.sqrt(displayValue);
      
      display.value = square;
    } else if (buttonText == "sin") {
      let x = displayValue;
      x = Math.sin((displayValue * Math.PI) / 180);
      display.value = x;
    } else if (buttonText == "tan") {
      let x = displayValue;
      x = Math.tan((displayValue * Math.PI) / 180);
      display.value = x;
    } else if (buttonText == "cos") {
      let x = displayValue;
      x = Math.cos(displayValue);
      display.value = x;
    } else if (buttonText == "log") {
      let x = displayValue;
      x = Math.log(displayValue);
      display.value = x;
    } else if (buttonText == "e") {
      displayValue = Math.E;

      display.value = displayValue;
    } else if (buttonText == "size") {
      displayValue = "";
    } else if (buttonText == "size -") {
      displayvalue = "";
    } 
    else if(buttonText==='log10'){
      let x = displayValue;
      x = Math.log10(displayValue);
      display.value = x;
    }
    else {
      displayValue += buttonText;
      display.value = displayValue;
    }
  });
}
function submit() {
  var x = document.getElementById("class");

  if (x.style.display === "contents") {
    x.style.display = "none";
  } else {
    x.style.display = "contents";
    
  }
  const collection = document.getElementsByClassName("btn");
  for (let i = 0; i < collection.length; i++) {
    collection[i];
    if (collection[i].style.display === "block") {
      collection[i].style.display = "none";
    } else {
      collection[i].style.display = "block";
      console.log(collection[i]);
    }
  }
  const input =document.getElementById("display");
  if (x.style.display =='none'){
  input.style.fontSize='41px';}
  else{
    input.style.fontSize='50px'
  }


}

