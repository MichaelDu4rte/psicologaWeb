
//------------ MENU SHOW AND CLOSE ------------ //

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*== REMOVE MENU MOBILE ==*/
const navlink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // Quando clicamos em cada nav_link, removemos a classe show-menu
    navMenu.classList.remove('show-menu');
}

navlink.forEach(n => n.addEventListener('click', linkAction));


//------------ SERVICES MODAL ------------ //

const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
    document.body.classList.add('modal-open'); // Adiciona a classe para desativar o scroll
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i);
    })
})

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
            document.body.classList.remove('modal-open'); // Remove a classe para permitir o scroll novamente
        })
    })
})


//------------ ACTIVE NAV LINK ------------ //

const sections = document.querySelectorAll('.section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


//------------ Depoiments ------------ //

