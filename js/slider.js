const swiper = new Swiper('.first-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: '.first-slider-pagination',
      type: "bullets",
      clickable: true,
    },
    grabCursor: true,
    
  });

const patientsSwiper = new Swiper('.patients-slider', {
  slidesPerView: 2,
  initialSlide: 0,
  spaceBetween: 20,
  pagination: {
    el: '.patients-slider-pagination',
    type: 'bullets',
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: '.patients-button-next',
    prevEl: '.patients-button-prev',
  },
});
const doctorsSlider = new Swiper('.doctors-slider', {
  spaceBetween: 60,
  slidesPerView: 3,
  grabCursor: true,
  initialSlide: 0,
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
const reviewSlider = new Swiper('.review-slider', {
  slidesPerView: 3,
  spaceBetween: 60,
  navigation: {
    nextEl: '.review-slider-button-next',
    prevEl: '.review-slider-button-prev',
  },
});
const recSlider = new Swiper ('.rec-slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: '.rec-slider-pagination',
    type: 'bullets',
    clickable: true,
  },
});
const priceSlider = new Swiper('.price-slider', {
  slidesPerView: 3,
  spaceBetween: 60,
  initialSlide: 0,
  pagination: {
    el: '.price-slider-pagination',
    type: 'bullets',
    clickable: true,
  },
  grabCursor: true,
});