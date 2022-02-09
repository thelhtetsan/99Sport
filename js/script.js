$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});
$(document).ready(function () {
  var mainHeight = $(".main-section").outerHeight();
  var featureHeight = $(".features-section").outerHeight();
  var counterHeight = $(".counter-section").outerHeight();
  var rulesHeight = $(".rules-section").outerHeight();
  var galleryHeight = $(".gallery-section").outerHeight();

  mfcrHeight = mainHeight + featureHeight + counterHeight + rulesHeight - 400;
  mainfeature = mainHeight - 140 + featureHeight;
  mainHeight = mainHeight - 300;

  $(window).scroll(function () {
    //for nav and back-to-top
    var scrolled_val = $(document).scrollTop().valueOf();
    if (scrolled_val > 100) {
      $("header").addClass("header-scroll");
      $(".back-to-top").addClass("active");
    } else {
      $("header").removeClass("header-scroll");
      $(".back-to-top").removeClass("active");
    }
    //for nav active
    if ($(window).scrollTop() > 0 && $(window).scrollTop() < mainHeight) {
      $("#home-link").addClass("active");
    } else if (
      $(window).scrollTop() > mainHeight &&
      $(window).scrollTop() < mainfeature
    ) {
      $("#home-link").removeClass("active");
      $("#feature-link").addClass("active");
    } else if ($(window).scrollTop() > mfcrHeight) {
      $("#home-link").removeClass("active");
      $("#feature-link").removeClass("active");
      $("#gallery-link").addClass("active");
    } else {
      $("#feature-link").removeClass("active");
      $("#gallery-link").removeClass("active");
    }
  });

  /*--------- Animation on scroll ------*/
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  //mobile nav
  $(".js--nav-icon,#home-link,#feature-link,#gallery-link").click(function () {
    //$("ul").slideToggle(200);

    if ($(".js--nav-icon").hasClass("fa-bars")) {
      $(".js--nav-icon").removeClass("fa-bars");
      $(".js--nav-icon").addClass("fa-times");
      $("#nav-ul").removeClass("hidden-ul");
      $("#nav-ul").addClass("mobile-nav-ul");
      $("header").addClass("mobile-header");
      $("#header-div").addClass("mobile-header-div");
      $("#nav-div").addClass("mobile-nav-div");
    } else {
      $(".js--nav-icon").removeClass("fa-times");
      $(".js--nav-icon").addClass("fa-bars");
      $("#nav-ul").addClass("hidden-ul");
      $("#nav-ul").removeClass("mobile-nav-ul");
      $("header").removeClass("mobile-header");
      $("#header-div").removeClass("mobile-header-div");
      $("#nav-div").removeClass("mobile-nav-div");
    }
  });
  //gallery
  $(".venobox").venobox({
    framewidth: "600px", // default: ''
    frameheight: "auto", // default: ''
    border: "0", // default: '0'
    bgcolor: "#ffffff60", // default: '#fff'
    titleattr: "data-title", // default: 'title'
    numeratio: true, // default: false
    infinigall: true, // default: false
    //share: ["facebook", "twitter", "download"], // default: []
  });
});
