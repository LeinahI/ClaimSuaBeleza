console.log("hello world");

//Animation On scroll start
AOS.init({
    duration: 800,
    easing: "slide",
});
//Animation On scroll end


//Stellar parallax start
(function ($) {
    "use strict";
    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: "scroll",
    });
//Stellar parallax end

// full height start
var fullHeight = function (){ /*Yung sa mga slider section imgs*/
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function (){
        $(".js-fullheight").css("height", $(window).height());
    });
};
fullHeight();
// full height end
var scrollWindow = function (){
    $(window).scroll(function (){
        var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");
        if(st>150){
            if(!navbar.hasClass("scrolled")){
                navbar.addClass("scrolled");
            }
        }
        if(st<150){
            if(navbar.hasClass("scrolled")) {
                navbar.removeClass("scrolled sleep");
            }
        }

        if(st>350){
            if(!navbar.hasClass("awake")){
                navbar.addClass("awake");
            }
            if(sd.length>0){
                sd.addClass("sleep");
            }
        }

        if(st<350) {
            if(navbar.hasClass("awake")){
                navbar.removeClass("awake");
                navbar.addClass("sleep");
            }
            if(sd.length>0){
                sd.removeClass("sleep");
            }
        }
    });
  };

  scrollWindow();

  $.Scrollax();
//carousel owl start
  var carousel = function(){
      $(".home-slider").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        mouseDrag: false,
        autoplayTimeout:5000, /*Duration ng image slide home 1000 = 1 sec*/
        animateOut: "fadeOut", /*keyframe name from animate.css line 1560*/
        animateIn: "fadeIn", /*keyframe name from animate.css line 1198*/
        nav: false,
        dots: false,
        autoplayHoverPause: false,
        items: 1,
        navText: [
            "<span class='ion-ios-arrow-back'></span>", /*ion icons from html line 25*/
            "<span class='ion-ios-arrow-forward'></span>", /*ion icons from html line 25*/
        ],
        responsive : {
            0:{items:1,},
            600:{items:1,},
            1000:{items:1,},
        },
      });

      $(".carousel-testimony").owlCarousel({
        loop: true,
        autoplay: false,
        center: true,
        margin: 30,
        stagePadding: 0,
        nav: false,
        items: 1,
        navText: [
            "<span class='ion-ios-arrow-back'></span>", /*ion icons from html line 25*/
            "<span class='ion-ios-arrow-forward'></span>", /*ion icons from html line 25*/
        ],
        responsive : {
            0:{items:1,},
            600:{items:2,},
            1000:{items:3,},
        },
      });

  };
  carousel();
//carousel owl end

//counter number animation start
  var counter = function(){
      $("#section-counter").waypoint(
          function (direction){
            if(
                direction === "down" &&
                !$(this.element).hasClass("ftco-animated")
            ){
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
                    ","
                );
                $(".number").each(function(){
                    var $this = $(this),
                    num = $this.data("number");
                    console.log(num);
                    $this.animateNumber(
                        {
                        number : num,
                        numberStep:comma_separator_number_step,
                        },
                        7000
                    );
                });
            }
          },
          {offset : "95%"}
      );
  };
  counter();
//counter number animation end

//contentwaypoint start
  var contentWayPoint = function(){
      var i = 0;
      $(".ftco-animate").waypoint(
          function(direction) {
              if(
                  direction === "down" &&
                  !$(this.element).hasClass("ftco-animated")
              ) {
                  i++;
                  $(this.element).addClass("item-animate");
                  setTimeout(function () {
                      $("body .ftco-animate.item-animate").each(function (k){
                          var el = $(this);
                          setTimeout(
                              function() {
                                  var effect = el.data("animate-effect");
                                  if(effect === "fadeIn") {
                                      el.addClass("fadeIn ftco-animated");
                                  }else if(effect === "fadeInLeft"){
                                    el.addClass("fadeInLeft ftco-animated");
                                  }else if(effect === "fadeInRight"){
                                    el.addClass("fadeInRight ftco-animated");
                                  }else{
                                    el.addClass("fadeInUp ftco-animated");
                                  }
                                  el.removeClass("item-animate");
                              },
                                k*50,
                                "easeInOutExpo"  
                            );
                      });
                  }, 100);
              }
          },
          {offset:"95%"}
        );
    };
    contentWayPoint();
//contentwaypoint end

})(jQuery);