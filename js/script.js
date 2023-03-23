//Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



/*Este código serve para fazer  o scroll  pelo  menu*/
window.onscroll = () =>{
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height)
    {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id +']').classList.add('active');
      });

    };
  });



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