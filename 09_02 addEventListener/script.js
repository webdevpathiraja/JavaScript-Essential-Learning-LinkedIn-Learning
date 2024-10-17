// addEventListeners

const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span");
const posY = document.querySelector(".posY span");

button.addEventListener("click", () => {
  button.classList.toggle("active"); // adds a class called "active" to the button if it isn't there, and removes it if it is 
  console.log("button was clicked");
})

// function to show the mouse position
const mousePosition = (event) => {
  posX.innerText = event.pageX; //  shows the X-coordinate in the spot for X on the page.
  posY.innerText = event.pageY;
}

// track the mouse movement
window.addEventListener("mousemove", mousePosition);
//Whenever the mouse moves, run the mousePosition function



// when the mouse enter the container
container.addEventListener( 
  "mouseenter",
  () => {
    container.classList.add("blue");
  }
);

container.addEventListener(
  "mouseleave",
  () => {
    container.classList.remove("blue");
  }
)
