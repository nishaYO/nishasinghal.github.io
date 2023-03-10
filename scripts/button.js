// HOME PAGE

//  buttons color change when hovered
let hover = document.querySelectorAll(".hover-btn");

hover.forEach(function (hover) {
  hover.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "rgba(223, 214, 214, 1)";
  });

  hover.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "rgba(223, 214, 214, 0.5)";
  });
});

// when clicked redirecting to the respective pages

let about = document.getElementById("about");
let work = document.getElementById("work");
let blogs = document.getElementById("blogs");
let contact = document.getElementById("contact");

about.addEventListener("click", function () {
  window.location.href = "https://nishayo.github.io/nishasinghal.github.io/about.html";
});

work.addEventListener("click", function () {
  window.location.href = "https://nishayo.github.io/nishasinghal.github.io/work.html";
});

blogs.addEventListener("click", function () {
  window.location.href = "https://nishayo.github.io/nishasinghal.github.io/blogs.html";
});

contact.addEventListener("click", function () {
  window.location.href = "https://nishayo.github.io/nishasinghal.github.io/contact.html";
});


// // when clicked playing click_sound
// const sound_clip = new Audio('https://nishayo.github.io/nishasinghal.github.io/sounds/click_sound.wav');
// const sound_btn = document.getElementsByClassName('nav-btn');
// sound_btn.forEach(ele=>ele.addEventListener('click', ()=>audio.play()));


// BLOGS PAGE
// redirecting to 1st blog when clicked
let blog1 = document.getElementById("blog1");
blog1.addEventListener("click", function () {
  window.location.href = "/blog1.html";
});
