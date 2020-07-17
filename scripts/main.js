// Add background to navbar after hero image
$(window).on("scroll", function () {
  var hero = document.getElementById("hero");
  if ($(window).scrollTop() > hero.clientHeight) {
    $("nav").addClass("nav-bg");
  } else {
    $("nav").removeClass("nav-bg");
  }
});

// Only show the navbar when scrolling up and hide upon scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 10) {
    document.getElementById("navbar").style.top = "0";
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};
