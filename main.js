const menuBtn = document.getElementsByTagName("span")[0];
const menu = document.getElementsByTagName("ul")[0];
const nav = document.getElementsByTagName("nav")[0];
let menuOpen = false;
menuBtn.addEventListener("click",()=>{
    if(!menuOpen){
        menu.classList.add("item-menu-show");
        nav.classList.add("resize");
        menuOpen=true;
    }
    else{
        menu.classList.remove("item-menu-show");
        nav.classList.remove("resize");
        menuOpen = false;
    }
});