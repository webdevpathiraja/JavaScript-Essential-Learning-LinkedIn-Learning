/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = { 
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

// helper funtion to create the image element
const figure = function(pack) {
  const figure = document.createElement("figure"); // create the figure element

  const img = document.createElement("img"); // create an img element

  img.setAttribute("src", pack.image); // set the ettribute to frogpack image

  img.setAttribute("alt", `${pack.name} image`); // set al attribute

  img.classList.add("backpack__image"); // a css class to style the image

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = `Image of ${pack.name}`;

  figure.append(img); // add the image to the figure element
  figure.append(figcaption); // add the fig caption to the fig element


  return figure;
};

// main funtion to create the article element and add content
const createArticle = function (pack) {
  const article = document.createElement("article"); // create an article element

  article.classList.add("backpack");
  article.innerHTML = content; 

  article.append(createImage(pack));

  return article;
}

// append the created article to the main section in the HTML
const mainSection = document.querySelector("main"); // find the main section in th HTML document

mainSection.append(createArticle(frogpack)); // Add the complete article (with content and image) to the main section
