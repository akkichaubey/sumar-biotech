jQuery(document).ready(function () {
  var headerwrap = jQuery(".header-wrap");
  var headerTop = jQuery(headerwrap).find(".head-top");
  jQuery(window).on("load scroll", function () {
    var headerTopHeight = headerTop.innerHeight();

    if (jQuery(this).scrollTop() > 30) {
      jQuery(headerwrap).addClass("sticky");
      // jQuery(headerwrap)
      //   .find("header")
      //   .css("transform", `translateY(-${headerTopHeight}px)`);
    } else {
      jQuery(headerwrap).removeClass("sticky");
      // jQuery(headerwrap).find("header").css("transform", "translateY(0)");
    }
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
});
