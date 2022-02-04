$(document).ready(function () {
  let currentHeight = $(window).height();

  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (currentHeight - 100 <= scroll) {
      $(".site-nav").addClass("site-nav-scroll");
    } else {
      $(".site-nav").removeClass("site-nav-scroll");
    }
  });
});

$(".menu-icon").click(function () {
  if (!$(".navbar-toggler").hasClass("collapsed")) {
    $(".navbar-toggler .menu-icon").removeClass("fa-bars").addClass("fa-xmark");
  } else {
    $(".navbar-toggler .menu-icon").addClass("fa-bars").removeClass("fa-xmark");
  }
});
