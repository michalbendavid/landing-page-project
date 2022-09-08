/**
 *  * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *  Dependencies: None
 *  JS Version: ES2015/ES6
 *  JS Standard: ESlint
*/

// global variables
const navbar = document.getElementById("navbar__list");
const navItems = document.querySelectorAll("section");

//function to create li nav items
function createNav () {
  navItems.forEach(function(navItem, i){
  const newLi = document.createElement("li");
  let itemText = navItem.getAttribute('data-nav');
  let itemHtml = `<a href=\"#${itemText}\" class=\"navLink\" id=\"navLink_${[i]}\">${itemText}</a>`;
  newLi.innerHTML = itemHtml;
  newLi.className = "navListItem";
  navbar.appendChild(newLi);

 // adding scroll to the ancore when clickink the links
  let navLinksItem = document.getElementById('navLink_'+ [i]);
  navLinksItem.addEventListener("click", (e)=> {
    e.preventDefault();
    document.getElementById(itemText).scrollIntoView( {behavior: "smooth"});
   });
 });
} 
createNav(); 
 
// Add class 'active' to section and navbar items when in viewport
let navLinks = document.querySelectorAll(".navLink");
let sections = document.querySelectorAll("section");
sections[0].classList.add("active");
const viewH = screen.availHeight;
document.addEventListener("scroll",function() {
  for (let i=0 ; i<sections.length ; i++){
      let rect = sections[i].getBoundingClientRect();
      let top = rect.top;
      let bottom = rect.bottom;
      if ( top<=viewH && bottom>viewH-top ) {
        sections[i].classList.add("active");
        navLinks[i].classList.add("active");
      } else {sections[i].classList.remove("active");
      navLinks[i].classList.remove("active");}
    };
  });

//form submit message function
 
function formValid(){
  let myForm = document.getElementById("form");
  myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    document.getElementById("formMessage").innerHTML="Submitted successfully!";
 });
}
formValid();
