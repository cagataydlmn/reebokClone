const hamburgermenuOpenButton = document.querySelector('.hamburger-menu-open')

hamburgermenuOpenButton.addEventListener('click',()=>{
    const mobileMenu = document.querySelector(".hamburger-menu");
    mobileMenu.classList.toggle("open")
});

const registerButton = document.querySelector('.sign__button button')
const registerButtonOpen = document.querySelector('.popup')
const registerButtonClose = document.querySelector('.vazgec')

registerButton.addEventListener("click",()=>{
    registerButtonOpen.style.display='block'
})

registerButtonClose.addEventListener("click",()=>{
    registerButtonOpen.style.display="none"

})

document.getElementById("alert").addEventListener("click", function() {
    alert("Kayıt Olundu");
});


