/**
 Practice: Play with event listeners
 */

// * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.outline = "6px solid red";
});

gridContainer.addEventListener("moueleave", () => {
    gridContainer.style.outline = "";
});



//* - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
// * - Add an event listener to each grid cell to change its background color when it is clicked.


const gridCells = document.querySelector(".cell");

gridCells.forEach((cell), () => {

    cell.addEventListener("mouseenter", () => {
        cell.style.outline = "6px solid green";
    });

    cell.addEventListener("mouseleave", () => {
        cell.style.outline = "";
    });

    cell.addEventListener("click", () => {
        if(cell.style.backgroundColor) {
            cell.style.backgroundColor = "";
        } else {
            cell.style.backgroundColor = "pink";
        }
    });
});


//* - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.

const body = document.body;

body.addEventListener("keydown", (event) => {
    let keyPressed = event.code;
    if(keyPressed === "KeyD") {
        body.style.backgroundColor = "" ? 
        body.style.backgroundColor = "black" :
        body.style.backgroundColor = "skyblue";
    }
})





 


