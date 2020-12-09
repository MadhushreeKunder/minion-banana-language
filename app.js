var buttonClicked = document.querySelector("#btn-click");
var textInput = document.querySelector("#textinput");
var outputDiv= document.querySelector("#output");

// console.log(textinput);

// outputDiv.innerText="Banana Translated";
function clickHandler() {
     console.log("button is clicked!");
     console.log("input" , textinput.value);
};

buttonClicked.addEventListener("click", clickHandler);


