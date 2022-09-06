/**
 *  * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *  Dependencies: None
 *  JS Version: ES2015/ES6
 *  JS Standard: ESlint
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/*
 * Define Global Variables
*
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// // build the nav

const navbar = document.getElementById("navbar__list");
const navItems = document.querySelectorAll("section");
const createNav = navItems.forEach((navItem)=>{
  const newLi = document.createElement("li");
  let itemText = navItem.getAttribute('data-nav');
  let itemLink = "<a href=\"#" + itemText + "\">" + itemText + "</a>";
  newLi.innerHTML = itemLink;
  newLi.className = "navListItem";
  navbar.appendChild(newLi);
});
createNav;
// // Add class 'active' to section when near top of viewport

// let listNavItems = navbar.getElementsByClassName("navListItem");

// for (let i = 0; i < listNavItems.length; i++) {
//     listNavItems[i].addEventListener("click", function() {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     });
// };


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



