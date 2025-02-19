
console.log("init");

// function menu
// scroll menu
window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let menu = document.getElementById("js-headerWrap");

    if (scrollPosition >= 180) {
        menu.classList.add("scrolled")
    } else {
        menu.classList.remove("scrolled")
    }
});
// open
let menuBtn = document.getElementById("js_mobileMenu-open")
menuBtn.addEventListener("click", () => {
    let menu = document.getElementById("js-menu");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active")
    } else {
        menu.classList.add("active")
    }
})
// close
let closeBtn = document.getElementById("js_mobileMenu-close")
closeBtn.addEventListener("click", () => {
    let menu = document.getElementById("js-menu");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active")
    } else {
        menu.classList.add("active")
    }
})

// function menu products
// open
let prodBtn = document.getElementById("js-ddMenu_prod")
prodBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (prodBtn.parentNode.classList.contains("active")) {
        prodBtn.parentNode.classList.remove("active")
    } else {
        prodBtn.parentNode.classList.add("active")
    }
})



// Home carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false
})
