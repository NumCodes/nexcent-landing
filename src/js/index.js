"use strict";

//selecting elements
const nav_toggle_btn = document.getElementById('nav-toggle-btn');
const mob_nav = document.getElementById('mob-nav');
const footerYear = document.getElementById('footer_current_year');
//functions
const elemClassToggler = function(elem, classToToggle){
    elem.classList.toggle(classToToggle)
}
const getCurrentYear = function(){
    const date = new Date
    return date.getFullYear()
}
//eventListners
nav_toggle_btn.addEventListener("click",()=>{
    elemClassToggler(mob_nav, "hidden");
})
window.addEventListener("DOMContentLoaded",()=>{
    footerYear.innerHTML= getCurrentYear()
})
//consoles for debugging

// Hide loader and display main content after 3 seconds
setTimeout(() => {
  document.querySelector('.loader-container').style.opacity = '0';
  document.querySelector('.loader-container').style.transition = 'opacity 0.5s';
  setTimeout(() => {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
  }, 500); // wait for transition to finish
},3000);