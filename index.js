// FUNCTION TO OPEN MENU ONCE YOU CLICK ON HAMBURGER

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.responsiveMenu');
let close = document.querySelector('.close')

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    console.log("Clicked on Menu Button!")
});

close.addEventListener('click', ()=>{
    menu.classList.remove('active');
})