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
// // build the navbar

// global variables
const navbar = document.getElementById("navbar__list");
const navItems = document.querySelectorAll("section");

//forEach loop to create li nav items
function createNav () {
  navItems.forEach(function(navItem, i){
  const newLi = document.createElement("li");
 //get the name by attribut data-nav
  let itemText = navItem.getAttribute('data-nav');
 //creat htmlcontent with id and link
  let itemHtml = `<a href=\"#${itemText}\" id=\"navLink_${[i]}\">${itemText}</a>`;
  newLi.innerHTML = itemHtml;
  newLi.className = "navListItem";

  //append new li to nav bar
  navbar.appendChild(newLi);

 // adding scroll to the links
  //choosing the <a> elements by id
  let navLinksItem = document.getElementById('navLink_'+ [i]);
  navLinksItem.classList.remove("active");
  //add an event listener to the links and scroll into veiw by id of the section
  navLinksItem.addEventListener("click", (e)=> {
    e.preventDefault();
    document.getElementById(itemText).scrollIntoView( {behavior: "smooth"});
    navLinksItem.classList.add("active");
   });

  });
} 
createNav(); 
 

    
// Add class 'active' to section when near top of viewport
//creats list of sections
let sections = document.querySelectorAll("section");
sections[0].classList.add("active");
const viewH = document.documentElement.clientHeight;
document.addEventListener("scroll",function() {
  for (let i=0 ; i<sections.length ; i++){
      let rect = sections[i].getBoundingClientRect();
      let top = rect.top;
      let bottom = rect.bottom;
      if (bottom >= 0 && bottom<=viewH && top>=0) {
      sections[i].classList.add("active");
      } else {sections[i].classList.remove("active");}
    };
  });

 
//     sections[i].addEventListener("click", function() {
// //     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     });
// };
function formValid(){
  let myForm = document.getElementById("form");
  myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    document.getElementById("formMessage").innerHTML="Submitted successfully!";
 });
}
formValid();






