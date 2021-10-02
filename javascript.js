const navbar=document.getElementsByClassName("navbar");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "rgba(0,0,0,1)";
    
  } else {
    document.getElementById("navbar").style.background = "none";
    
  }
}
const menuBtn = document.querySelector('.hamburger');
const menuboxfull = document.querySelector('.menuboxfull');
const hero = document.querySelector('.hero');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuboxfull.style.transform = "translateY(350px)";
    hero.style.display="none"
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuboxfull.style.transform = "translateY(-350px)";
    hero.style.display="block";
    menuOpen = false;
  }
});