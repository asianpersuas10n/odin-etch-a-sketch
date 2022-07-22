// creates 16x16 grid 

const gridItemHTML = '<div class="grid-item"></div>';
const gridContainer = document.querySelector(".grid-container");

gridContainer.innerHTML = gridItemHTML.repeat(256);

// hover drawing effect

const gridItem = document.querySelectorAll(".grid-item");


for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener("mouseover", function() {
        gridItem[i].style.backgroundColor = "black";
    });
};