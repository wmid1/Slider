document.getElementById('prev').onclick = sliderLeft;
document.getElementById('next').onclick = sliderRight;

var left = -800;
var polosa = document.getElementById('polosa');
var slideIndex = 1;
showSlides(slideIndex);
var lock = false;

function currentSlide(n) { // Смена слайдов по нажатию на доты
if (lock == false){
lock = true;
	if (left > -800) {
		left = -8000;
	}
	if (n==slideIndex){
		lock=false;
	}
	if (n < slideIndex){
		var start = Date.now();
		var s=slideIndex -n;
	  var timer = setInterval(function() {
	  var timePassed = (Date.now() - start)*s*2;
	  polosa.style.left = left + timePassed  + 'px';
	  if (timePassed > 800*s) clearInterval(timer),left = left + 800*s, showSlides(slideIndex = n), lock=false,polosa.style.left = left+'px';
	}, s);
}
	if (left < - 8000) {
		left = -800;
	}
	if (n > slideIndex){
		var start = Date.now();
		var s = n - slideIndex;
		var timer = setInterval(function() {
		var timePassed = (Date.now() - start)*s*2;
		polosa.style.left = left + timePassed / -1  + 'px';
		if (timePassed > 800*s) clearInterval(timer),left = left - 800*s, showSlides(slideIndex = n), lock=false, polosa.style.left = left+'px';
	}, s);
}
}}

function sliderRight() { // Слайдер впрао
if (lock == false){
lock = true;
	if (left < - 8000) {
		left = -800;
	}
  var start = Date.now();
  var timer = setInterval(function() {
  var timePassed = Date.now() - start;
     polosa.style.left = left + timePassed / -1 + 'px';
     if (timePassed > 800) clearInterval(timer),left = left - 800, showSlides(slideIndex += 1),polosa.style.left = left+'px',lock=false;
   }, 1);
   if (slideIndex == 10) {
     slideIndex = 0
   }
}}

function sliderLeft() { // Слайдер влево
if (lock == false){
lock = true;
  if (left > -800) {
    left = -8000;
  }
  var start = Date.now();
  var timer = setInterval(function() {
      var timePassed = Date.now() - start;
      polosa.style.left = left + timePassed + 'px';
      if (timePassed > 800) clearInterval(timer), left = left + 800, showSlides(slideIndex -= 1),polosa.style.left = left+'px',lock=false;
			if (slideIndex < 2) {
	      slideIndex = 11
	    }
    }, 1);
}}

function showSlides() { // Смена индекса дота
    var i;
    var dots = document.getElementsByClassName("slider-dots_item");
   for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}
