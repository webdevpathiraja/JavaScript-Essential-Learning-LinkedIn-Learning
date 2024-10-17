/**
 * Loops Aplenty!
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

// array
const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

// collection of objects - each item with three details
const nestedObjects = {
  item01: {
    name: "piggy",
    type: "toy",
    weight: 30,
  },
  item02: {
    name: "headlamp",
    type: "equipment",
    weight: 120,
  },
  item03: {
    name: "pen",
    type: "tool",
    weight: 30,
  },
  item04: {
    name: "pencil",
    type: "tool",
    weight: 30,
  },
  item05: {
    name: "eraser",
    type: "tool",
    weight: 40,
  },
  item03: {
    name: "water bottle",
    type: "equipment",
    weight: 1300,
  },
};

// find element artcile
const article = document.querySelector("article");
// create an ul to hold the list items
let stuffList = document.createElement("ul");


/**
 * for loop
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */
for (let i = 0; i < stuff.length; i++) {
  let listItem = document.createElement("li"); // create a li for each obj
  listItem.innerHTML = stuff[i]; // adding each item to the li
  stuffList.append(listItem); // and adding li to the ul
}

/**
 * for...of loop and arrays
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
for (const item of stuff) {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  stuffList.append(listItem);
}

/**
 * foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
// stuff.forEach((item) => {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = item;
//   stuffList.append(listItem);
// });

/**
 * for...in loop and objects
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
// for (const singleObject in nestedObjects) {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`;
//   stuffList.append(listItem);
// }


article.append(stuffList);
