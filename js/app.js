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
const newLi = document.createElement("li");
newLi.textContent = "you did it!!";
const list = document.getElementById("navbar__list");
document.list.appendChild(newLi);

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
// const navbar = document.getElementById("navbar__list");
// const navItems = document.querySelectorAll("section");
// const createNav = navItems.forEach((navItem)=>{
//   const newLi = document.createElement("li");
//   newLi.innerText = navItem.data-nav;
//   navbar.appendChild(newLi);
// });
// document.nav.appendChild(createNav);
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//form example code - needs editing 
/*
<script type="text/javascript">
  function validateForm() {
    if (isEmpty(document.getElementById("data_2").value.trim())) {
      alert("NAME is required!");
      return false;
    }
    if (isEmpty(document.getElementById("data_4").value.trim())) {
      alert("EMAIL is required!");
      return false;
    }
    if (!validateEmail(document.getElementById("data_4").value.trim())) {
      alert("EMAIL must be a valid email address!");
      return false;
    }
    return true;
  }
  function isEmpty(str) {
    return str.length === 0 || !str.trim();
  }
  function validateEmail(email) {
    var re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
  }
</script>
*/

