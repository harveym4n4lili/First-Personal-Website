let parallaxbg = document.getElementById("aboutmebg");

window.addEventListener("scroll",function(){
    var value = window.scrollY;
    parallaxbg.style.top = value * 0.965 + 'px';
})