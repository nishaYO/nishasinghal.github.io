// when hovered color darker

let hover = document.querySelectorAll(".hover-btn");

hover.forEach(function (hover) {
  hover.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "rgba(223, 214, 214, 0.5)";
  });

  hover.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "rgba(223, 214, 214, 0.25)";
  });
});

// when clicked redirecting to the respective pages

let about = document.getElementById("about");
let work = document.getElementById("work");
let blogs = document.getElementById("blogs");
let contact = document.getElementById("contact");

about.addEventListener("click", function () {
  window.location.href = "/about.html";
});

work.addEventListener("click", function () {
  window.location.href = "/work.html";
});

blogs.addEventListener("click", function () {
  window.location.href = "/blogs.html";
});

contact.addEventListener("click", function () {
  window.location.href = "/contact.html";
});
