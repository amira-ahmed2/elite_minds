// slider education

const prevEducational = document.querySelector(".prevEducational ");
const next = document.querySelector(".nextEducational ");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
e.preventDefault();
index = index + 1;
prevEducational.classList.add("show");
track.style.transform = "translateX(" + index * -width + "px)";
if (track.offsetWidth - index * width < index * width) {
next.classList.add("hide");
}
});
prevEducational.addEventListener("click", function () {
index = index - 1;
next.classList.remove("hide");
if (index === 0) {
prevEducational.classList.remove("show");
}
track.style.transform = "translateX(" + index * -width + "px)";
});
// 
const prevcertificates = document.querySelector(".prevcertificates");
const nextcertificates = document.querySelector(".nextcertificates");
// const carouselcertificates = document.querySelector(".carousel-container");
const trackcertificates = document.querySelector(".track");
// let width = carousel.offsetWidth;
// let index = 0;
window.addEventListener("resize", function () {
width = carousel.offsetWidth;
});
nextcertificates.addEventListener("click", function (e) {
e.preventDefault();
index = index + 1;
prevcertificates.classList.add("show");
trackcertificates.style.transform = "translateX(" + index * -width + "px)";
if (trackcertificates.offsetWidth - index * width < index * width) {
nextcertificates.classList.add("hide");
}
});
prevcertificates.addEventListener("click", function () {
index = index - 1;
nextcertificates.classList.remove("hide");
if (index === 0) {
prevcertificates.classList.remove("show");
}
trackcertificates.style.transform = "translateX(" + index * -width + "px)";
});
// end
const prevbook = document.querySelector(".prevbook");
const nextbook = document.querySelector(".nextbook");
// const carouselcertificates = document.querySelector(".carousel-container");
const trackbook = document.querySelector(".track");
// let width = carousel.offsetWidth;
// let index = 0;
window.addEventListener("resize", function () {
width = carousel.offsetWidth;
});
nextbook.addEventListener("click", function (e) {
e.preventDefault();
index = index + 1;
prevbook.classList.add("show");
trackbook.style.transform = "translateX(" + index * -width + "px)";
if (trackbook.offsetWidth - index * width < index * width) {
nextbook.classList.add("hide");
}
});
prevbook.addEventListener("click", function () {
index = index - 1;
nextbook.classList.remove("hide");
if (index === 0) {
prevbook.classList.remove("show");
}
trackbook.style.transform = "translateX(" + index * -width + "px)";
});
// end
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
// //////////////////
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.display === "block") {
  content.style.display = "none";
} else {
  content.style.display = "block";
}
});
}


var coll2 = document.getElementsByClassName("collapsibleCurriculum");
var i;

for (i = 0; i < coll2.length; i++) {
coll2[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.display === "block") {
  content.style.display = "none";
} else {
  content.style.display = "block";
}
});
}
