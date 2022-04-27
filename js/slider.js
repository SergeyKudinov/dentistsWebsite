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