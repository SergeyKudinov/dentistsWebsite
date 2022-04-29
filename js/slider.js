const swiper = new Swiper('.first-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: '.first-slider-pagination',
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
    grabCursor: true,
  });

const patientsSwiper = new Swiper('.patients-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.patients-slider-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
  grabCursor: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.patients-button-next',
    prevEl: '.patients-button-prev',
  },
});
const doctorsSlider = new Swiper('.doctors-slider', {
  slidesPerView: 3,
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: '.doctors-slider-button-next',
    prevEl: '.doctors-slider-button-prev',
  }
});
const prosSlider = new Swiper('.pros-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.pros-slider-button-next',
    prevEl: '.pros-slider-button-prev',
  },
});
const reviewSlider = new Slider('.review-slider', {
  slidesPerView: 3,
  spaceBetween:60,
  navigation: {
    nextEl: '.review-slider-button-next',
    prevEl: '.review-slider-button-prev',
  },
});