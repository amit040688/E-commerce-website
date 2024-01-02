$( document ).ready(function() {
$('.slicknav_btn ').click(function(){
$('.slicknav_menu >ul').slideToggle(500);
$('.slicknav_menu ul a').next('.submenu').slideUp(500);

})



$('.slicknav_menu ul a').click(function(){
$(this).next('ul').slideToggle(500);
$(this).parent().siblings().children('.submenu').slideUp(250);
return false;
});

});


$( document ).ready(function() {
$('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade:true,
  arrows:false,
  autoplay:true,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}

  
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:false,
  responsive:{
      0:{
          items:1
      },
      479:{
        items:2
    },
      
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});


});




