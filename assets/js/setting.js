jQuery(document).ready(function () {
  var headerwrap = jQuery(".header-wrap");
  jQuery(window).on("load scroll", function () {
    if (jQuery(this).scrollTop() > 0) {
      jQuery(headerwrap).addClass("sticky");
    } else {
      jQuery(headerwrap).removeClass("sticky");
    }
  });

  jQuery(".head-search button").click(function () {
    jQuery(".head-search").toggleClass("active");
  });

  jQuery(".menu-toggle button, .mobile-overlay").click(function () {
    const $this = jQuery(this);
    if ($this.hasClass("active")) {
      jQuery(".menu-toggle button, .mobile-overlay").removeClass("active");
      jQuery(".header-menu").removeClass("active");
      jQuery("body").removeClass("pause");
    } else {
      jQuery(".menu-toggle button").addClass("active");
      jQuery(".mobile-overlay").addClass("active");
      jQuery(".header-menu").addClass("active");
      jQuery("body").addClass("pause");
    }
  });

  jQuery(".menu > ul > li").each(function (index, element) {
    var currentlimobile = jQuery(this).find(".sub-menu").length;
    if (jQuery(currentlimobile).length == 1) {
      jQuery(
        `<div class='menu-arrow'><svg class="icon" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
  </svg></div>`
      ).insertBefore(jQuery(this).find(".sub-menu"));
    }
  });

  jQuery(".menu-arrow").on("click", function () {
    jQuery(this).addClass("active");
    jQuery(this).next(".sub-menu").slideDown();
    jQuery(this)
      .parent()
      .siblings("li")
      .find(".menu-arrow")
      .removeClass("active");
    jQuery(this).parent().siblings("li").find(".sub-menu").slideUp();
  });

  // SVG Create
  jQuery("img.svg").each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    jQuery.get(
      imgURL,
      function (data) {
        var $svg = jQuery(data).find("svg");
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }
        $img.replaceWith($svg);
      },
      "xml"
    );
  });

  jQuery(".wpcf7-form input,  .wpcf7-form textarea")
    .focus(function () {
      jQuery(this).parent().siblings("label").addClass("has-value");
      jQuery(this).addClass("has-value");
    })
    .blur(function () {
      var textValue = jQuery(this).val();
      if (textValue == "") {
        jQuery(this).parent().siblings("label").removeClass("has-value");
        jQuery(this).removeClass("has-value");
      }
    });
  jQuery(".wpcf7-form label, .input-box label").on("click", function () {
    jQuery(this).parent(".floating-input").find("input, textarea").focus();
  });
  jQuery(".wpcf7-textarea").removeAttr("cols");
  jQuery(".wpcf7-textarea").removeAttr("rows");
  jQuery("textarea")
    .each(function () {
      this.setAttribute(
        "style",
        "height:" + this.scrollHeight + "px;overflow-y:hidden;"
      );
    })
    .on("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
});

var certifications = new Swiper(".certifications-slider", {
  slidesPerView: 1,
  pagination: {
    el: ".sw-pagination-certificate",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
var certifications = new Swiper(".gallery-slider", {
  slidesPerView: 1,
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-gallery-next",
    prevEl: ".swiper-gallery-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
