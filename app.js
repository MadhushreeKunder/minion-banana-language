var buttonClicked = document.querySelector("#btn-click");
var textInput = document.querySelector("#textinput");
var outputDiv= document.querySelector("#output");

// console.log(textinput);

// outputDiv.innerText="Banana Translated";
function clickHandler() {
     outputDiv.innerText= "rubbish values " + textInput.value;
};

buttonClicked.addEventListener("click", clickHandler);


