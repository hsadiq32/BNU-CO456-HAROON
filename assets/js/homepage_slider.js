var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides"); // Finds the images with the specified class name
  for (i = 0; i < x.length; i++) { // Finds length of total images
    x[i].style.display = "none"; // Hides images
  }
  slideIndex++; // Keeps track of the slide number
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 375); // Change image every 0.375 seconds
}
