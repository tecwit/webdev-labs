const makeBigger = () => {
   // alert('make bigger!');
   var p_font_size = parseFloat(window.getComputedStyle(document.querySelector(".content")).fontSize)
   var h_font_size = parseFloat(window.getComputedStyle(document.querySelector("header")).fontSize)
   document.querySelector(".content").style.fontSize = (p_font_size + 1) + "px";
   document.querySelector("header").style.fontSize = (p_font_size + 1) + "px";
};

const makeSmaller = () => {
   // alert('make smaller!');
   var p_font_size = parseFloat(window.getComputedStyle(document.querySelector(".content")).fontSize)
   var h_font_size = parseFloat(window.getComputedStyle(document.querySelector("header")).fontSize)
   document.querySelector(".content").style.fontSize = (p_font_size - 1) + "px";
   document.querySelector("header").style.fontSize = (p_font_size + 1) + "px";
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
