
// console.log("init");

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
    autoplayTimeout: 3000
})


async function getData() {
    const url_base = "https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B%5D=ChIJefm2afOPP44RkpXp7_cwkKs";
    const with_text_only = "1";
    const min_rating = "4";
    const page_length = "6";
    const order = "date";

    const url = `${url_base}&with_text_only=${with_text_only}&min_rating=${min_rating}&page_length=${page_length}&order=${order}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const data = json.result.data;

        let tempHtml = "";

        for (let e = 0; e < data.length; e++) {
            const el = data[e];

            let unix_timestamp = el.published_at;
            let date = new Date(unix_timestamp * 1000);
            let day = date.getDay();
            let month = "0" + date.getMonth();
            let year = "0" + date.getFullYear();
            let formattedTime = day + '/' + month + '/' + year;

            tempHtml += `
        <div class='item'>
            <a href="${el.url}"
            target="_blank">
            <div class="top">
                <img src="${el.reviewer_picture_url}"
                    alt="">
                <div class="text">
                    <h4 class="name">${el.reviewer_name}</h4>
                    <p class="date">${formattedTime}</p>
                    <p class="rating rating-${el.rating}">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                            viewBox="-5.0 -10.0 110.0 135.0">
                            <path
                                d="m93.824 44.383-13.766 16.996c-0.98047 1.2109-1.4805 2.7422-1.3984 4.3008l1.1445 21.84c0.19922 3.8008-3.5781 6.5469-7.1328 5.1797l-20.418-7.8398c-1.457-0.55859-3.0664-0.55859-4.5195 0l-20.418 7.8398c-3.5508 1.3633-7.332-1.3828-7.1328-5.1797l1.1445-21.84c0.082031-1.5547-0.41406-3.0898-1.3984-4.3008l-13.766-16.996c-2.3945-2.957-0.95312-7.3984 2.7227-8.3828l21.125-5.6602c1.5039-0.40234 2.8086-1.3516 3.6562-2.6562l11.91-18.344c2.0703-3.1914 6.7422-3.1914 8.8164 0l11.91 18.344c0.84766 1.3086 2.1523 2.2539 3.6562 2.6562l21.125 5.6602c3.6758 0.98438 5.1172 5.4258 2.7227 8.3828z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                            viewBox="-5.0 -10.0 110.0 135.0">
                            <path
                                d="m93.824 44.383-13.766 16.996c-0.98047 1.2109-1.4805 2.7422-1.3984 4.3008l1.1445 21.84c0.19922 3.8008-3.5781 6.5469-7.1328 5.1797l-20.418-7.8398c-1.457-0.55859-3.0664-0.55859-4.5195 0l-20.418 7.8398c-3.5508 1.3633-7.332-1.3828-7.1328-5.1797l1.1445-21.84c0.082031-1.5547-0.41406-3.0898-1.3984-4.3008l-13.766-16.996c-2.3945-2.957-0.95312-7.3984 2.7227-8.3828l21.125-5.6602c1.5039-0.40234 2.8086-1.3516 3.6562-2.6562l11.91-18.344c2.0703-3.1914 6.7422-3.1914 8.8164 0l11.91 18.344c0.84766 1.3086 2.1523 2.2539 3.6562 2.6562l21.125 5.6602c3.6758 0.98438 5.1172 5.4258 2.7227 8.3828z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                            viewBox="-5.0 -10.0 110.0 135.0">
                            <path
                                d="m93.824 44.383-13.766 16.996c-0.98047 1.2109-1.4805 2.7422-1.3984 4.3008l1.1445 21.84c0.19922 3.8008-3.5781 6.5469-7.1328 5.1797l-20.418-7.8398c-1.457-0.55859-3.0664-0.55859-4.5195 0l-20.418 7.8398c-3.5508 1.3633-7.332-1.3828-7.1328-5.1797l1.1445-21.84c0.082031-1.5547-0.41406-3.0898-1.3984-4.3008l-13.766-16.996c-2.3945-2.957-0.95312-7.3984 2.7227-8.3828l21.125-5.6602c1.5039-0.40234 2.8086-1.3516 3.6562-2.6562l11.91-18.344c2.0703-3.1914 6.7422-3.1914 8.8164 0l11.91 18.344c0.84766 1.3086 2.1523 2.2539 3.6562 2.6562l21.125 5.6602c3.6758 0.98438 5.1172 5.4258 2.7227 8.3828z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                            viewBox="-5.0 -10.0 110.0 135.0">
                            <path
                                d="m93.824 44.383-13.766 16.996c-0.98047 1.2109-1.4805 2.7422-1.3984 4.3008l1.1445 21.84c0.19922 3.8008-3.5781 6.5469-7.1328 5.1797l-20.418-7.8398c-1.457-0.55859-3.0664-0.55859-4.5195 0l-20.418 7.8398c-3.5508 1.3633-7.332-1.3828-7.1328-5.1797l1.1445-21.84c0.082031-1.5547-0.41406-3.0898-1.3984-4.3008l-13.766-16.996c-2.3945-2.957-0.95312-7.3984 2.7227-8.3828l21.125-5.6602c1.5039-0.40234 2.8086-1.3516 3.6562-2.6562l11.91-18.344c2.0703-3.1914 6.7422-3.1914 8.8164 0l11.91 18.344c0.84766 1.3086 2.1523 2.2539 3.6562 2.6562l21.125 5.6602c3.6758 0.98438 5.1172 5.4258 2.7227 8.3828z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                            viewBox="-5.0 -10.0 110.0 135.0">
                            <path
                                d="m93.824 44.383-13.766 16.996c-0.98047 1.2109-1.4805 2.7422-1.3984 4.3008l1.1445 21.84c0.19922 3.8008-3.5781 6.5469-7.1328 5.1797l-20.418-7.8398c-1.457-0.55859-3.0664-0.55859-4.5195 0l-20.418 7.8398c-3.5508 1.3633-7.332-1.3828-7.1328-5.1797l1.1445-21.84c0.082031-1.5547-0.41406-3.0898-1.3984-4.3008l-13.766-16.996c-2.3945-2.957-0.95312-7.3984 2.7227-8.3828l21.125-5.6602c1.5039-0.40234 2.8086-1.3516 3.6562-2.6562l11.91-18.344c2.0703-3.1914 6.7422-3.1914 8.8164 0l11.91 18.344c0.84766 1.3086 2.1523 2.2539 3.6562 2.6562l21.125 5.6602c3.6758 0.98438 5.1172 5.4258 2.7227 8.3828z" />
                        </svg>
                    </p>
                </div>
            </div>
            <div class="mid">
                <p class="comment">
                    ${el.text}
                </p>
            </div>
            <div class="bottom">
                <span>ver más</span>
            </div>
            </a>
            </div>`;

        }

        return { data, tempHtml };
    } catch (error) {
        console.error(error.message);
    }
}

getData().then((resp) => {

    // console.log(resp.data);

    if (resp.data.length >= 1) {



        document.getElementById("revBox").innerHTML = resp.tempHtml;
    } else {
        const section = document.getElementById("home-sec-reviews");
        section.style.display = "none";
    }

}).then(() => {

    // Home carousel reviews
    $('.owl-carousel-home-reviews').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 2,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
                margin: 60,
            },
            // breakpoint from 480 up
            480: {
                items: 1,
                margin: 40,
            },
            // breakpoint from 768 up
            768: {
                nav: true,
                margin: 40,
            }
        }
    })

}).catch(() => {
    const section = document.getElementById("home-sec-reviews");
    section.style.display = "none";
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
    autoplayTimeout: 3500,
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
    autoplayTimeout: 3500
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
    autoplayTimeout: 3500
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
