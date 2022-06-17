window.onscroll = function(){
    scroll = document.documentElement.scrollTop;
    header = document.getElementById("header");
    if (scroll > 20){
        header.classList.add('nav_mod');
    } else if (scroll < 20){
        header.classList.remove('nav_mod');
    }
}

document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
menu = document.getElementById("header");
nav = document.getElementById("nav-bar");

function mostrar_menu(){
    menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}
window.addEventListener("resize", function(){
    if (window.innerWidth > 760)  {
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }
});

var fecha = new Date();
document.getElementById("ano").innerHTML = fecha.getFullYear();