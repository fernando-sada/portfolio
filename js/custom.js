// WE WAIT UNTIL DOM HAS LOADED TO INITIALIZE SWIPER SLIDER
document.addEventListener("DOMContentLoaded", function() {

  var swiper = new Swiper ('.swiper', { 
    loop:true,
    slidesPerView: 1,  
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      }
    },
    spaceBetween: 20, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // PORTFOLIO GALLERY
  $(".filter-button").click(function(){               //WHEN THE USER CLICKS A FILTER, HIDE OR SHOW THE ELEMENTS ACORDING TO CLASS
    var value = $(this).attr('data-filter');          //THE VARIABLE VALUE GETS ASSIGNED THE VALUE OF THE ATTRIBUTE DATA-FILTER
      if(value == "all"){                             //IF THE USER CLICKS THE BUTTON ALL, WE TARGET THE .FILTER CLASS WHICH IS ASSIGN TO ALL PORTFOLIO ELEMENTS
        $('.filter').show('1000');                    
      }
      else{   
        $(".filter").not('.'+value).hide('2000');     //IF THE ELEMENT DOES NOT HAVE THE VALUE CLICKED, HIDE IT WITH A TRANSITION OF 2 SECONDS
        $('.filter').filter('.'+value).show('2000');  //IF THE ELEMENT HAS THE VALUE, SHOW IT WITH A TRANSITION OF 2 SECONDS
      }
  });
    
    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");

});