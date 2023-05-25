import "./index.html";
import "./index.scss";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1.2,
  spaceBetween: 16,

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


const menu = document.querySelector(".menu");
const buttonMenu = document.querySelector(".header__burger-btn");
const buttonMenuClose = document.querySelector(".menu-header__close");
const blurMenu = document.querySelector(".blur");
const langList = document.querySelectorAll(".menu-lang a");
const menuList = document.querySelectorAll(".menu-nav__item a");
const descriptionText = document.querySelector(".main-description__about-us");
const descriptionShowMore = document.querySelector(".main-description__show-more");
const descriptionBtnImage = document.querySelector(".show-more-expand__description");
const servicesLinks = document.querySelectorAll('.main-header__services-links');
const repairTechBtn = document.querySelector('.repair-tech-container__show-more');
const repairTechList = document.querySelector('.repair-tech-container__list');
const repairTechBtnImage = document.querySelector('.show-more-expand__repair-tech');
const repairBrandList = document.querySelector('.repair-brand-container__list');
const repairBrandBtn = document.querySelector('.repair-brand-container__show-more');
const repairBrandImage = document.querySelector('.show-more-expand__repair-brand');
const modalCall = document.querySelector(".modal-call");
const buttonModalCallMenu = document.querySelector(".menu-contacts__call");
const buttonModalCloseCall = document.querySelector(".modal-call__close");
const buttonModalCall = document.querySelector(".header__feedback-call");
const modalFeedback = document.querySelector(".modal-feedback");
const buttonModalFeedbackMenu = document.querySelector(".menu-contacts__chat");
const buttonModalCloseFeedback = document.querySelector(".modal-feedback__close");
const buttonModalFeedback = document.querySelector(".header__feedback-chat");
let windowWidth = window.innerWidth;

buttonMenu.addEventListener ("click", function() {
  menu.classList.toggle("menu-is-active");
  blurMenu.classList.add("blur-is-active");
})

buttonMenuClose.addEventListener("click", function() {
  menu.classList.toggle("menu-is-active");
  blurMenu.classList.remove("blur-is-active");
})

blurMenu.addEventListener("click", function() {
  menu.classList.remove("menu-is-active");
  blurMenu.classList.remove("blur-is-active");
})

menuList.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    const menuLinkActive = document.querySelector(".menu-nav__link-is-active");
    menuLinkActive.classList.remove("menu-nav__link-is-active");
    this.classList.add("menu-nav__link-is-active");
  });
});

langList.forEach((langLink) => {
  langLink.addEventListener("click", function () {
    const langLinkActive = document.querySelector(".menu-lang__is-active");
    langLinkActive.classList.remove("menu-lang__is-active");
    this.classList.add("menu-lang__is-active");
  });
});

descriptionShowMore.addEventListener("click", function(){
  descriptionText.classList.toggle('main-description__about-us-all')

  if (descriptionText.classList.contains('main-description__about-us-all')){
    descriptionShowMore.innerText = "Скрыть всё";
    descriptionBtnImage.style.transform = "rotate(180deg)"
  }
  else {
    descriptionShowMore.innerText = "Читать далее";
    descriptionBtnImage.style.transform = "rotate(0deg)"
  }
})

servicesLinks.forEach(servicesLink => {
    servicesLink.addEventListener('click', function(){
        const servicesLinkActive = document.querySelector('.main-header__services-links--active')
        servicesLinkActive.classList.remove('main-header__services-links--active')
        this.classList.add('main-header__services-links--active')
    })
})

repairTechBtn.addEventListener("click" , function() {
  repairTechList.classList.toggle('repair-tech-container__list-is-active');
  if (repairTechList.classList.contains('repair-tech-container__list-is-active')){
    repairTechBtn.innerText = "Скрыть всё";
    repairTechBtnImage.style.transform = "rotate(180deg)"
  }
  else {
    repairTechBtn.innerText = "Показать всё";
    repairTechBtnImage.style.transform = "rotate(0deg)"
  }
})

repairBrandBtn.addEventListener("click" , function() {
  repairBrandList.classList.toggle('repair-brand-container__list-is-active');
  if (repairBrandList.classList.contains('repair-brand-container__list-is-active')){
    repairBrandBtn.innerText = "Скрыть всё";
    repairBrandImage.style.transform = "rotate(180deg)"
  } 
  else {
    repairBrandBtn.innerText = "Показать всё";
    repairBrandImage.style.transform = "rotate(0deg)"
  }
})

if (windowWidth > 1439) {
  buttonModalCallMenu.addEventListener("click", function () {
    modalCall.classList.toggle("modal-call-is-active");
    blurMenu.classList.toggle("blur-is-active");
    modalFeedback.classList.toggle("modal-feedback-is-active");
  });
} else {
  
buttonModalCallMenu.addEventListener("click", function () {
  modalCall.classList.toggle("modal-call-is-active");
  menu.classList.toggle("menu-is-active");
  blurMenu.classList.add("blur-is-active");
});
}

buttonModalCall.addEventListener("click", function () {
  modalCall.classList.toggle("modal-call-is-active");
  blurMenu.classList.toggle("blur-is-active");
});

buttonModalCloseCall.addEventListener("click", function () {
  modalCall.classList.toggle("modal-call-is-active");
  blurMenu.classList.remove("blur-is-active");
});

blurMenu.addEventListener("click", function () {
  modalCall.classList.remove("modal-call-is-active");
  blurMenu.classList.remove("blur-is-active");
});

buttonModalCallMenu.removeEventListener("click", function () {
  modalCall.classList.toggle("modal-call-is-active");
  blurMenu.classList.toggle("blur-is-active");
});

buttonModalFeedback.addEventListener("click", function () {
  modalFeedback.classList.toggle("modal-feedback-is-active");
  blurMenu.classList.toggle("blur-is-active");
});

buttonModalFeedbackMenu.addEventListener("click", function () {
  modalFeedback.classList.toggle("modal-feedback-is-active");
  blurMenu.classList.add("blur-is-active");
  menu.classList.toggle("menu-is-active");
});

buttonModalCloseFeedback.addEventListener("click", function () {
  modalFeedback.classList.toggle("modal-feedback-is-active");
  blurMenu.classList.remove("blur-is-active");
});

blurMenu.addEventListener("click", function () {
  modalFeedback.classList.remove("modal-feedback-is-active");
  blurMenu.classList.remove("blur-is-active");
});