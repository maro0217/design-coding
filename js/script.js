$(function() {


    $('.mv__image').fadeIn("slow");
    $(".bgLRextendTrigger").addClass("bgLRextend");
    $(".bgappearTrigger").addClass("bgappear");
    $("#staff").hide();

    function fadeAnime() {    
        $(".fadeUpTrigger").each(function() {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
          $(this).addClass("fadeUp");
        }
        else {
          $(this).removeClass("fadeUp")
        }
      });
    }

    function pageTop () {
      var $window = $(window).scrollTop();
      if ($window > 300) {
        $(".page-topBtn").fadeIn();
        $(".header").addClass("active");
      }
      else {
        $(".page-topBtn").fadeOut();
        $(".header").removeClass("active");
      }
    }

    
    $(window).scroll(function() {
      fadeAnime();
      pageTop();
    });


    $(".tab-navigation__link").on("click", function() {
        $(".cards-wrapper").hide();

         var $href = $(this).attr("href");
         
         $($href).fadeIn(1000);

         $(".tab-navigation__item_checked").removeClass("tab-navigation__item_checked");

         $(this).parent().addClass("tab-navigation__item_checked");

         return false
    });

    $('.price-course').scroll(function() {
      $('.scroll-btn').fadeOut(500);
    });

    $(".accordion__title").on("click", function() {
       var findElm = $(this).next(".accordion__body");
       $(findElm).addClass("slide").slideToggle();
       $(this).toggleClass("active");

    });

 swiper = new Swiper(".swiper", {
    
      // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }

    });



})