const menu = document.querySelector('.menu-toggle input');

const nav = document.querySelector(".nav-ind ul");

menu.addEventListener('click', function(){
    nav.classList.toggle('slide');
} );