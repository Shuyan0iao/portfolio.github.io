/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

<<<<<<< HEAD
/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
=======
/*==================== PAGE LOAD ====================*/
function loadContent(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${containerId}:`, error));
}

function loadSkills() {
    loadContent('skills.html', 'skills-container');
}

function loadHomes() {
    loadContent('homes.html', 'homes-container');
}

window.onload = function() {
    loadSkills();
    loadHomes();
};

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
>>>>>>> 391aea1 (Initial commit)
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation(){
<<<<<<< HEAD
    gsap.from('.home__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.home__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.home__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.home__button', {opacity: 0, duration: .5, delay: .5, y: -20})
=======
    gsap.from('.homes__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.homes__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.homes__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.homes__button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.homes__pic', {opacity: 0, duration: .5, delay: .5, y: -20})

>>>>>>> 391aea1 (Initial commit)
}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))

<<<<<<< HEAD
/* 服务遮罩层 */
=======
/*==================== 服务遮罩层 ====================*/
>>>>>>> 391aea1 (Initial commit)
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach(function (learnmoreBtn, i) {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => [
            modalView.classList.remove("active")
        ])
    })
})
<<<<<<< HEAD
/*==================== SEND MESSAGE ====================*/
=======

/*==================== SEND MESSAGE ====================*/
>>>>>>> 391aea1 (Initial commit)
