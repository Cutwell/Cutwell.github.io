var navigation;
var toggle = 0;
var slideIndex = 0;
carousel();

function scrolling() {
	clearTimeout(navigation);
	document.getElementById('main').style.overflow = 'hidden';
	document.getElementById('title').className = 'animated zoomOut';
	document.getElementById('slideshow').className = 'animated fadeIn';
	document.getElementById('slideshow').style.display = 'block';
	document.getElementById('scrolltotop').className = 'animated zoomIn';
	document.getElementById('scrolltotop').style.display = 'block';
	carousel();
}

function topFunction() {
	clearTimeout(navigation);
	document.getElementById('scrolltotop').className = 'animated zoomOut';
	document.getElementById('slideshow').className = 'animated fadeOut';

	document.getElementById('main').style.overflow = 'visible';

	document.body.scrollTop = 0; // For Chrome, Safari and Opera
	document.documentElement.scrollTop = 0; // For IE and Firefox

	document.getElementById('title').className = 'animated zoomIn';
	carousel();
}


function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  navigation = setTimeout(carousel, 9000);
}
function plusDivs(n) {
  clearTimeout(navigation);
    showDivs(slideIndex += n);
}
 function showDivs(n) {
    var i;
      var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
     }
     x[slideIndex-1].style.display = "block";

   navigation = setTimeout(carousel, 9000);
}
