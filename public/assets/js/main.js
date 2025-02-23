"use strict";

jQuery(document).ready(function ($) {
  $(window).on("load", function () {
    $(".loaded").fadeOut();
    $(".preloader").delay(1000).fadeOut("slow");
  });

  /*---------------------------------------------*
     * Mobile menu smooth scrolling
     ---------------------------------------------*/
  $("#bs-example-navbar-collapse-1")
    .find('a[href*=#]:not([href="#"])')
    .click(function (e) {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          e.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset()?.top || 0, // Ensure target exists
            },
            1000
          );

          if ($(".navbar-toggle").css("display") !== "none") {
            $(this)
              .parents(".container")
              .find(".navbar-toggle")
              .trigger("click");
          }
        }
      }
    });

  /*---------------------------------------------*
     * WOW Animation
     ---------------------------------------------*/
  if (typeof WOW !== "undefined") {
    var wow = new WOW({
      mobile: false, // trigger animations on mobile devices (default is true)
    });
    wow.init();
  }

  /* ---------------------------------------------------------------------
     * Owl Carousel
     --------------------------------------------------------------------- */
  if ($(".main_home_slider").length) {
    $(".main_home_slider").owlCarousel({
      responsiveClass: true,
      autoplay: false,
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      autoplayHoverPause: true,
    });
  }

  if ($(".single_features_slide").length) {
    $(".single_features_slide").owlCarousel({
      responsiveClass: true,
      autoplay: false,
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      autoplayHoverPause: true,
    });
  }

  if ($(".main_teastimonial_slider").length) {
    $(".main_teastimonial_slider").owlCarousel({
      responsiveClass: true,
      autoplay: false,
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      autoplayHoverPause: true,
    });
  }

  /*---------------------------------------------
     * Magnific Popup (for image galleries)
     ---------------------------------------------*/
  if ($(".portfolio-img").length) {
    $(".portfolio-img").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }

  /*---------------------------------------------
     * Skillbar animation
     ---------------------------------------------*/
  if ($(".skillbar").length) {
    var skillBarTopPos = $(".skillbar").position()?.top || 0;
    $(document).scroll(function () {
      var scrolled_val = $(document).scrollTop();
      if (scrolled_val > skillBarTopPos - 250) startAnimation();
    });

    function startAnimation() {
      $(".skillbar").each(function () {
        $(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            6000
          );
      });
    }
  }

  /*---------------------------------------------
     * Counter Animation
     ---------------------------------------------*/
  if ($(".statistic-counter").length) {
    $(".statistic-counter").counterUp({
      delay: 10,
      time: 2000,
    });
  }

  /*---------------------------------------------
     * Navbar Scroll Effect
     ---------------------------------------------*/
  $(window).scroll(function () {
    var top = $(document).scrollTop();
    var height = 300;

    if (top > height) {
      $(".navbar-fixed-top").addClass("menu-scroll");
    } else {
      $(".navbar-fixed-top").removeClass("menu-scroll");
    }
  });

  /*---------------------------------------------
     * Scroll Up Button
     ---------------------------------------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $(".scrollup").fadeIn("slow");
    } else {
      $(".scrollup").fadeOut("slow");
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  /*---------------------------------------------
     * Portfolio Filtering (MixItUp)
     ---------------------------------------------*/
  if ($("#portfoliowork").length) {
    $("#portfoliowork").mixItUp({
      selectors: {
        target: ".tile",
        filter: ".filter",
        sort: ".sort-btn",
      },
      animation: {
        animateResizeContainer: false,
        effects: "fade scale",
      },
    });
  }

  /*---------------------------------------------
     * Prevent Dropdown Closing on Click
     ---------------------------------------------*/
  $(".dropdown-menu").click(function (e) {
    e.stopPropagation();
  });

  /*---------------------------------------------
     * Navbar Resize Effect on Scroll
     ---------------------------------------------*/
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
      $("nav").addClass("small");
    } else {
      $("nav").removeClass("small");
    }
  });
});
