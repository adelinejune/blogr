// UI Vars
const topMenus = document.querySelectorAll(".top-menu");
const bottomMenus = document.querySelectorAll(".bottom-menu");
const hamburger = document.querySelector(".hamburger-toggle");
const nav = document.querySelector(".navigation-menu")


topMenus.forEach(function(topMenu){
    let bottomMenu = topMenu.nextElementSibling;
    topMenu.addEventListener("click", function(){
        if(bottomMenu.classList.contains("menu-visible")){
            bottomMenu.classList.toggle("menu-visible")
            topMenu.lastElementChild.classList.toggle("arrow-rotate")
        
        }else {
            bottomMenus.forEach(menu => menu.classList.remove("menu-visible"));
            topMenus.forEach(topMenu => topMenu.lastElementChild.classList.remove("arrow-rotate"))

            bottomMenu.classList.add("menu-visible");
            topMenu.lastElementChild.classList.add("arrow-rotate")
        }
    })

})

hamburger.addEventListener("click", function(){
    nav.classList.toggle("open-nav")
})