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
  slidesPerView: 4,
  initialSlide: 0,
  spaceBetween: 20,
  pagination: {
    el: '.patients-slider-pagination',
    type: 'bullets',
    clickable: true,
  },
  allowTouchMove: false,
  /* grabCursor: true, */
  navigation: {
    nextEl: '.patients-button_next',
    prevEl: '.patients-button_prev',
  },
});

const doctorsSlider = new Swiper('.doctors-slider', {
  spaceBetween: 20,
  slidesPerView: 4,
  grabCursor: true,
  initialSlide: 0,
  navigation: {
    nextEl: '.doctors-button_next',
    prevEl: '.doctors-button_prev',
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
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: '.review-button_next',
    prevEl: '.review-button_prev',
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
  navigation: {
    nextEl: '.price-button_next',
    prevEl: '.price-button_prev'
  },
  grabCursor: true,
});

const certSlider = new Swiper('.cert-slider', {
  spaceBetween: 20,
  navigation: {
    nextEl: '.cert-slider-button-next',
    prevEl: '.cert-slider-button-prev',
  },
  slidesPerView: 2,
  grabCursor: true,
});





const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
  initialSlide: 3,
  slidesPerGroup: 2,
	slidesPerView: 2,
	spaceBetween: 54,
  grabCursor: true,
	navigation: {
		nextEl: '.arrow_docs_next',
		prevEl: '.arrow_docs_prev'
	},
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
});

const sliderImages = new Swiper('.slider__images .swiper-container', {
	slidesPerView: 4,
  slidesPerGroup: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.arrow_docs_next',
		prevEl: '.arrow_docs_prev'
	},
	grabCursor: true,
	thumbs: {
		swiper: sliderThumbs // указываем имя превью слайдера
	},
});

const partnersSlider = new Swiper('.partners_slider', {
  spaceBetween: 120,
  slidesPerView: 4,
  grabCursor: true,
  navigation: {
    nextEl: '.partners_button_next',
    prevEl: '.partners_button_prev'
  },
});