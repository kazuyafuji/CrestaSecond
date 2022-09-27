$(".header-humberger-area, #humberger-nav-item-link").on("click", function () {
  $(".header-humberger").toggleClass("active");
  $(".humberger-modal").toggleClass("active");
});

$(function () {
  $(window).scroll(function () {
    var window_width = $(window).width();
    if (window_width > 768) {
      if ($(this).scrollTop() > 656) {
        $(".header").addClass("header-bg-dark");
      } else {
        $(".header").removeClass("header-bg-dark");
      }
    } else {
      if ($(this).scrollTop() > 504) {
        $(".header").addClass("header-bg-dark");
      } else {
        $(".header").removeClass("header-bg-dark");
      }
    }
  });
});
