//document.getElementById("main").innerHTML = Date();
function updateClock() {
   var days = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
   var m = new Date();
   var dateString =
   (days[ m.getDay() - 1]) + ", " +
   ("0" + m.getDate()).slice(-2) + "/" +
   ("0" + (m.getMonth()+1)).slice(-2) +"/"+
   m.getFullYear() +" "+
   ("0" + m.getHours()).slice(-2) + ":" +
   ("0" + m.getMinutes()).slice(-2) + ":" +
   ("0" + m.getSeconds()).slice(-2);

   // set the content of the element with the ID codes to the formatted string
   document.getElementById('codes').innerHTML = dateString;

   // call this function again in 1000ms
   setTimeout(updateClock, 1000);
}
updateClock(); // initial call

// Set local storage
var slideIx = Number(localStorage.getItem('slideIndex') || 1);

var slideIndex = slideIx;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
   showSlides(slideIndex += n);
   localStorage.setItem('slideIndex', slideIndex);
   console.log(localStorage.getItem('slideIndex'));
}

// Thumbnail image controls
function currentSlides(n) {
   showSlides(slideIndex = n);
   localStorage.setItem('slideIndex', slideIndex);
   console.log(localStorage.getItem('slideIndex'));
}

// Show slides
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var reqdVars = document.getElementsByClassName("reqdVar");
   if (n > slides.length) {
      slideIndex = 1;
   }
   if (n < 1) {
      slideIndex = slides.length;
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < reqdVars.length; i++) {
      reqdVars[i].className = reqdVars[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   reqdVars[slideIndex-1].className += " active";
}