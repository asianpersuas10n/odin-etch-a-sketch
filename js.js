// creates 16x16 grid 

const gridItemHTML = '<div class="grid-item"></div>';
const gridContainer = document.querySelector(".grid-container");

// hover drawing effect

let gridItem = document.querySelectorAll(".grid-item");

function grid(userInput) {
    const autoStr = "auto "
    gridContainer.style.cssText = "grid-template-columns: " + autoStr.repeat(userInput) + ";";
    userInput *= userInput;
    gridContainer.innerHTML = gridItemHTML.repeat(userInput);
    gridItem = document.querySelectorAll(".grid-item");
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener("mouseover", function() {
            gridItem[i].style.backgroundColor = "black";
        });
    };
};
grid(16);

// takes input and recreates grid

function enter(e) {
    if (13 == e.keyCode) {
        e.preventDefault();
        getInput();
    };
};

document.querySelector("#gsize").addEventListener("keypress", enter)
document.querySelector(".button").addEventListener("click", getInput);

function getInput() {
    let userInput = parseInt(document.querySelector("#gsize").value);
    if (Number.isInteger(userInput)) {
        if ((userInput <= 100) && (userInput > 0)) {
            grid(userInput);
        } else {
            return alert("Number can't be more than 100 or less than 1.");
        };
    } else {
        return alert("Please enter a whole number.");
    };
};
