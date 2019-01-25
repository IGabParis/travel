var scrollpos = window.scrollY;
var header = document.getElementById("navbar");
var headerheight = document.getElementById("navbar").offsetHeight;

function add_class_on_scroll() {
  header.classList.add("fixed-theme");
}

function remove_class_on_scroll() {
  header.classList.remove("fixed-theme");
}

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos > (headerheight)) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop()>0){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

});