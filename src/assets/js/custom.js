jQuery(document).ready(function($) {
    $('.carousel').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows: true,
    responsive: [{
     breakpoint: 1199,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 1
     }
    },
    {
      breakpoint: 768,
      settings: {
         arrows: true,
         slidesToShow: 1,
         slidesToScroll: 1
      },
      
    }]
    });
    $('.gallery').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: true,
        responsive: [{
         breakpoint: 320,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
        },
        {
          breakpoint: 768,
          settings: {
             arrows: true,
             slidesToShow: 1,
             slidesToScroll: 1
          }
        }]
        });
        $('.panel-slide').slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          arrows: true,
          responsive: [{
           breakpoint: 320,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
          },
          {
            breakpoint: 768,
            settings: {
               arrows: true,
               slidesToShow: 1,
               slidesToScroll: 1
            }
          }]
          });
    });
    
$('.dtr-video-popup').venobox(); 

var Expand = (function() {
  var tile = $('.strips__strip');
  var tileLink = $('.strips__strip > .strip__content');
  var tileText = tileLink.find('.strip__inner-text');
  var stripClose = $('.strip__close');
  
  var expanded  = false;

  var open = function() {
      
    var tile = $(this).parent();

      if (!expanded) {
        tile.addClass('strips__strip--expanded');
        $('.panel-slide').slick('setPosition');
        $(".strips__strip--expanded .large_box_txt .link-btn").text("← Back");
        // add delay to inner text
        tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.addClass('strip__close--show');
        // stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
        expanded = true;
      } 
    };
  
  var close = function() {
    if (expanded) {
      tile.removeClass('strips__strip--expanded');
      $(".strips__strip .large_box_txt .link-btn").text("Explore More");
      tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
      stripClose.removeClass('strip__close--show');
    //   stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
      expanded = false;
    }
  }
$( ".c-panel__circle .link-btn" ).click(function() {
  $(this).closest(".strips__strip").toggleClass( "strips__strip--expanded");
   $(".fa-close").toggleClass( "strip__close--show");
  $('.panel-slide').slick('unslick').slick('reinit').slick();
});
$( ".c-panel__circle .link-btn" ).click(function() {
      $(this).text(function(i, v){
     return v === 'Explore More' ? '← Back' : 'Explore More'
  })
});
$('.accordion-button').click(function() {
  $('.panel-slide').slick('unslick').slick('reinit').slick();

});

    var bindActions = function() {
      tileLink.on('click', open);
      stripClose.on('click', close);
    };

    var init = function() {
      bindActions();
    };

    return {
      init: init
    };

  }());

Expand.init();
$(document).ready(function () { 
$(".cphone").intlTelInput({
nationalMode: false,
preferredCountries: ['in', 'ae', 'us', 'gb', 'kw', 'om', 'sa', 'qa'],

});
//  email validation function
function isEmail(email) {
var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
return regex.test(email);
}

$(".cphone").keypress(function (e) {
//if the letter is not digit then display error and don't type anything
if (e.which != 43 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
//display error message
//$("#errmsg").html("Digits Only").show().fadeOut("slow");
return false;
}
});
  
  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
// settingutm tags
var utm_medium = getParameterByName('utm_medium');
var utm_source = getParameterByName('utm_source');
var utm_campaign = getParameterByName('utm_campaign');
var utm_term = getParameterByName('utm_term');
var utm_content = getParameterByName('utm_content');

$("input[name*='utm_medium']").val(utm_medium);
$("input[name*='utm_source']").val(utm_source);
$("input[name*='utm_campaign']").val(utm_campaign);
$("input[name*='utm_term']").val(utm_term);
$("input[name*='utm_content']").val(utm_content);

function getDate() {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm }
today = yyyy + "-" + mm + "-" + dd;

document.getElementById("submission_date").value = today;
}

//call getDate() when loading the page
getDate();


function getMonth() {
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var now = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
document.getElementById("submission_month").value = thisMonth;
}

//call getMonth() when loading the page
getMonth();

//   page url
var url      = window.location.href;   
document.getElementById("page_url").value = url;
});
  $(window).bind("load",function(){
         $(window).scroll(function() {
         var newWindowWidth2 = $(window).width();
         if (newWindowWidth2 < 551) {
         var div_top = $('.section-04').offset().top;
    var window_top = $(window).scrollTop() - 200;
    if (window_top > div_top) {
        if (!$('.section-04').is('.sticky')) {
            $('.section-04 .link-btn').addClass('sticky');
        }
    } else {
        $('.section-04 .link-btn').removeClass('sticky');
    }
  }
});
  });

