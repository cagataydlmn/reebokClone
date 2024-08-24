const hamburgermenuOpenButton = document.querySelector('.hamburger-menu-open')

hamburgermenuOpenButton.addEventListener('click',()=>{
    const mobileMenu = document.querySelector(".hamburger-menu");
    mobileMenu.classList.toggle("open")
});

