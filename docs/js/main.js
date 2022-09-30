$(".header-humberger-area, #humberger-nav-item-link").on("click", function () {
  $(".header-humberger").toggleClass("active");
  $(".humberger-modal").toggleClass("active");
});

$(function () {
  $(window).scroll(function () {
    var window_width = $(window).width();
    var current_html = $("title").html();
    var scroll_l = 0;
    var scroll_s = 0;
    console.log(current_html);
    if (current_html === "cresta_second(無料のコーディング課題)") {
      scroll_l = 656;
      scroll_s = 504;
    } else {
      scroll_l = 357;
      scroll_s = 264;
    }
    if (window_width > 768) {
      if ($(this).scrollTop() > scroll_l) {
        $(".header").addClass("header-bg-dark");
      } else {
        $(".header").removeClass("header-bg-dark");
      }
    } else {
      if ($(this).scrollTop() > scroll_s) {
        $(".header").addClass("header-bg-dark");
      } else {
        $(".header").removeClass("header-bg-dark");
      }
    }
  });
});
