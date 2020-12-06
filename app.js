var buttonClicked = document.querySelector("#btn-click");
var textInput = document.querySelector("#textinput");

console.log(textinput);

function clickHandler() {
     console.log("button is clicked!");
     console.log("input" , textinput.value);
};

buttonClicked.addEventListener("click", clickHandler);

// 56.21



