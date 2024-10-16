// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;


function createNavMenu(document) {
      // Your code goes here
      const nav = document.createElement("nav");
      nav.classList.add("main-navigation");

      const ul = document.createElement("ul");
      ul.innerHTML = navContent;

      nav.append(ul);
      
      const siteHeader = document.querySelector(".siteheader")
      siteHeader.append(nav);
}