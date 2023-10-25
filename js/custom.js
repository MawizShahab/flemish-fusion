$(document).ready(function () {
  $(".burger-menu").click(function () {
    $(".mobile-nav").toggleClass("show");
    $(".categories").toggleClass("hide");
    $(".btn-primary").toggleClass("hide");
    $(this).toggleClass("hide");
    $(".cross-menu").toggleClass("show");
  });

  $(".cross-menu").click(function () {
    $(".mobile-nav").toggleClass("show");
    $(".categories").toggleClass("hide");
    $(".btn-primary").toggleClass("hide");
    $(this).toggleClass("show");
    $(".burger-menu").toggleClass("hide");
  });

  $(".goto").click(function (event) {
    event.preventDefault();
    var targetId = $(this).attr("href");
    $("html, body").animate({ scrollTop: jQuery(targetId).offset().top }, 1000);
  });
});

$(document).ready(function () {
  $(".carousel.owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(".works-carousel.owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoPlaySpeed: 2000,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
});
