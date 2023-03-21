/*Este código serve para fazer  o scroll  pelo  menu*/
window.onscroll = () =>{
let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100)
}

/*Este trecho cuidará do slide */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween:50,
    loop: true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });