$(document).ready(function () {
  let currentHeight = $(window).height();

  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (currentHeight - 100 <= scroll) {
      $(".site-nav").addClass("site-nav-scroll");
    } else {
      $(".site-nav").removeClass("site-nav-scroll");
      setActiveNav("home");
    }
  });

  $(".menu-icon").click(function () {
    if (!$(".navbar-toggler").hasClass("collapsed")) {
      $(".navbar-toggler .menu-icon")
        .removeClass("fa-bars")
        .addClass("fa-xmark");
    } else {
      $(".navbar-toggler .menu-icon")
        .addClass("fa-bars")
        .removeClass("fa-xmark");
    }
  });

  $(".pricing-slide").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Detect Individual Section
  // var waypoints = $("#home").waypoint(
  //   function () {
  //     $(".nav-link").removeClass("current-active");
  //     $(".nav-link[href='#home']").addClass("current-active");
  //   },
  //   {
  //     offset: "-10%",
  //   }
  // );
  // var waypoints = $("#about").waypoint(
  //   function () {
  //     $(".nav-link").removeClass("current-active");
  //     $(".nav-link[href='#about']").addClass("current-active");
  //   },
  //   {
  //     offset: "25%",
  //   }
  // );
  // var waypoints = $("#services").waypoint(
  //   function () {
  //     $(".nav-link").removeClass("current-active");
  //     $(".nav-link[href='#services']").addClass("current-active");
  //   },
  //   {
  //     offset: "25%",
  //   }
  // );
  // var waypoints = $("#pricing").waypoint(
  //   function () {
  //     $(".nav-link").removeClass("current-active");
  //     $(".nav-link[href='#pricing']").addClass("current-active");
  //   },
  //   {
  //     offset: "25%",
  //   }
  // );
  // var waypoints = $("#contact").waypoint(
  //   function () {
  //     $(".nav-link").removeClass("current-active");
  //     $(".nav-link[href='#contact']").addClass("current-active");
  //   },
  //   {
  //     offset: "25%",
  //   }
  // );
});

function setActiveNav(current) {
  $(".nav-link").removeClass("active-nav");
  $(`.nav-link[href='#${current}']`).addClass("active-nav");
}

(function scrollNav() {
  let currentActive = $("section[id]");
  console.log(currentActive);
  currentActive.waypoint(
    function (direction) {
      if (direction == "down") {
        setActiveNav($(this.element).attr("id"));
      }
    },
    {
      offset: "150px",
    }
  );

  currentActive.waypoint(
    function (direction) {
      if (direction == "up") {
        setActiveNav($(this.element).attr("id"));
      }
    },
    {
      offset: "-10px",
    }
  );
})();

$(window).on("load", function () {
  $(".loader-container").fadeOut(1000, function () {
    $(this).remove();
  });
});

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
