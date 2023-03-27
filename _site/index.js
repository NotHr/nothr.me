const mobileMenu = document.querySelector(".nav-menu-icon")
const menu = document.querySelector(".nav-links")
const github = document.querySelector(".github")

mobileMenu.addEventListener("click",() => {
    mobileMenu.classList.toggle("active")
    menu.classList.toggle("active")
})

menu.addEventListener("click",() => {
    mobileMenu.classList.toggle("active")
    menu.classList.toggle("active")
})

github.addEventListener("click", () => {
   window.open("https://github.com/nothr/gsync.nothr.me")
})
