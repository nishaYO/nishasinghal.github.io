// WORK PAGE
// using swiper api to build a slider to display projects

const swiper = new Swiper(".swiper", {
  // autoplay:{
  //     // delay: 5000,
  //     // disableOnInteraction: false,
  // },

  // Optional parameters
  direction: "horizontal",
  loop: true,

  //Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    class: ".white",
  },
});
