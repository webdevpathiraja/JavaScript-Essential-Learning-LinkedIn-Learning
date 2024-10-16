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
      // create nav element
      const mainNav = document.createElement(" mainNav ");
       mainNav .classList.add("main-navigation");

      // create unordered list
      const navList = document.createElement("navList");

      // place the list items into the unordered list ('navList')
      navList.innerHTML = navContent;

      // place the nav list inside the mainNav
       mainNav .append(navList);

      // place the maniNav inside the header
      const siteHeader = document.querySelector(".siteheader")
      siteHeader.append(nav);
}
