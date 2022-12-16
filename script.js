let parallax = document.getElementsByClassName("parallax_layer");
let article_parallax = document.getElementById("article_parallax");

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.1 + "px";
})