let parallaxbg = document.getElementById("aboutmebg");
const hamburger_button = document.getElementsByClassName("hamburger-menu")[0];
const navlinks = document.getElementsByClassName("navlinks")[0];


window.addEventListener("scroll",function(){
    var value = window.scrollY;
    parallaxbg.style.top = value * 0.965 + 'px';
})


hamburger_button.addEventListener("click",() => {
    navlinks.classList.toggle("active");
 
})