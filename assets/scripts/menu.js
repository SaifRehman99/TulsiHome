jQuery(document).ready(function($) {
  menuControl();
}); /* document ready ends */

jQuery(window).resize(function($) {
  menuControl();
}); /* window resize ends */

jQuery(window).load(function($) {
  // menuControl();
}); /* window load ends */

// function windowWidthCheck(){
//     if ($(window).width() =< 1024) {
//         $('.menuDDtwo').addClass('mobile-starts');
//     }
//     else {
//         $('.menuDDtwo').removeClass('mobile-starts');
//     }
// }

function menuControl() {
  // detect if its iDevice or if window width is less than 1024 // only than show hover behavior otherwise add class (mobile-starts) and collapse menu
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
  if (agentID || $(window).width() <= 1024) {
    // mobile code here
    $(".menuDDtwo").addClass("mobile-starts");

    $(".mobile-menu-trigger-wrap").click(function(e) {
      e.preventDefault();
      $(".mobile-menu-content-wrap").toggle();
    });
  } else {
    // not mobile or ipad

    // remove # from hover links // we dont want click there
    $(
      ".menuDDtwo__link.dropdown--mega, .menuDDtwo__link.dropdown--mega > a, .menuDDtwo__link.dropdown, .menuDDtwo__link.dropdown > a"
    ).click(function(e) {
      e.preventDefault();
    });

    // small menu control
    //////////////////////////////////////////////////////////////////////
    $(".menuDDtwo").removeClass("mobile-starts");

    // $('.menuDDtwo__link.dropdown').on('hover',function(){
    $(".menuDDtwo__link.dropdown").mouseenter(function() {
      $(".menuDDtwo__link.dropdown .dropdown--menu")
        .stop()
        .fadeIn("400")
        .addClass("opened");
      setTimeout(function() {
        $(".menuDDtwo__link.dropdown .dropdown--menu").css("opacity", 1);
      }, 400);
    });

    //$(document).mouseup(function (e) {
    // $('.menuDDtwo__link.dropdown').on('mouseleave',function(e){
    $(".menuDDtwo__link.dropdown").mouseleave(function(e) {
      $(".menuDDtwo__link.dropdown .dropdown--menu")
        .fadeOut("100")
        .removeClass("opened");
      setTimeout(function() {
        $(".menuDDtwo__link.dropdown .dropdown--menu").css("opacity", 0);
      }, 100);
      // // get the menu wrap and the menu
      // var $menu = $('.menuDDtwo__link.dropdown');
      // var $menuBlock = $('.menuDDtwo__link.dropdown .dropdown--menu');
      // $menuBlock.fadeOut();
      // $($menu).removeClass('opened');
      // // three conditions
      // if(
      //     !$menu.is(e.target)
      //     && $menu.has(e.target).length === 0
      //     && ($menu).hasClass('opened')
      // ) {
      //   $menuBlock.fadeOut();
      //   $($menu).removeClass('opened');
      // }
    });

    // mega menu control
    ///////////////////////////////////////////////////////////////////////

    $(".dropdown--mega").mouseenter(function() {
      $(".megaDropDownWrap")
        .stop()
        .fadeIn("400")
        .addClass("mega-menu-opened");
      setTimeout(function() {
        $(".megaDropDownWrap").css("opacity", 1);
      }, 400);
    });
    $(".dropdown--mega").mouseleave(function() {
      $(".megaDropDownWrap")
        .fadeOut("100")
        .removeClass("mega-menu-opened");
      setTimeout(function() {
        $(".megaDropDownWrap").css("opacity", 0);
      }, 100);
    });
  }
}
