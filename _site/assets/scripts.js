jQuery( document ).ready(function($){
  // Smoooooth scrolling
  $('.smooth-scroll').on("click", function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500);
    return false;
  });

  // Stick the footer to the bottom of the page
  stickyFooter();

  // Toggle menu
  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.navbar').toggleClass("menu-open");
  });

});

// Dynamically set bottom margin of body for sticky footer
function stickyFooter() {
  var bodyBottomMargin = $('footer').outerHeight();
  $("body").css("margin-bottom", bodyBottomMargin);
}
