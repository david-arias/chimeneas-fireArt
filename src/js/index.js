
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


// HOME PAGE

// Home carousel
$('.owl-carousel-home').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500
})

// NOSOTROS PAGE

// noso carousel
$('.owl-carousel-nosotros').owlCarousel({
    loop: false,
    margin: 40,
    stagePadding: 80,
    nav: true,
    items: 3,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 2,
            margin: 60,
        },
        // breakpoint from 480 up
        480: {
            items: 3,
            margin: 40,
        },
        // breakpoint from 768 up
        768: {
            nav: true,
            margin: 40,
        }
    }
})

// GALERIA PAGE

// galeria carousel
$('.owl-carousel-galeria').owlCarousel({
    loop: true,
    margin: 40,
    stagePadding: 80,
    nav: true,
    items: 4,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 1,
            margin: 120,
        },
        // breakpoint from 480 up
        480: {
            items: 3,
            margin: 40,
        },
        // breakpoint from 768 up
        768: {
            nav: true,
            margin: 40,
        }
    }
})


// BLOG PAGE

// blog carousel
$('.owl-carousel-blog').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000
})


// PRODUCT PAGE

// Product carousel
$('.owl-carousel-prods').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000
})

let prodBtns = document.querySelectorAll(".js-typeBtn");
prodBtns.forEach(el => {
    el.addEventListener("click", (btn) => {

        prodBtns.forEach(elem => {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active');
            }
        });

        el.classList.toggle("active");

        let prodType = btn.target.dataset.type;
        let prodSection = document.getElementById("js_product-section");

        switch (prodType) {
            case "chim-bioetanol":
                if (prodSection.classList.contains('chim-gas')) {
                    prodSection.classList.remove('chim-gas');
                } else if (prodSection.classList.contains('chim-lena')) {
                    prodSection.classList.remove('chim-lena');
                }
                prodSection.classList.add("chim-bioetanol");
                break;
            case "chim-gas":
                if (prodSection.classList.contains('chim-bioetanol')) {
                    prodSection.classList.remove('chim-bioetanol');
                } else if (prodSection.classList.contains('chim-lena')) {
                    prodSection.classList.remove('chim-lena');
                }
                prodSection.classList.add("chim-gas");
                break;
            case "chim-lena":
                if (prodSection.classList.contains('chim-bioetanol')) {
                    prodSection.classList.remove('chim-bioetanol');
                } else if (prodSection.classList.contains('chim-gas')) {
                    prodSection.classList.remove('chim-gas');
                }
                prodSection.classList.add("chim-lena");
                break;

            default:
                if (prodSection.classList.contains('chim-bioetanol')) {
                    prodSection.classList.remove('chim-bioetanol');
                } else if (prodSection.classList.contains('chim-gas')) {
                    prodSection.classList.remove('chim-gas');
                } else if (prodSection.classList.contains('chim-lena')) {
                    prodSection.classList.remove('chim-lena');
                }
                break;
        }
    })
});
