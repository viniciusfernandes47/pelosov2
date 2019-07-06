$('.slider_produtos').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
    ]
  });


  $('.slider_quem').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('#slick_exclusivo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
          {
                  breakpoint: 768,
                  settings: 'unslick'
          }
    ]
  });
  
  
  $(".carrinho i.flaticon-shopping-cart").click(function(){
    $(".carrinho_hide").slideToggle("slow");
  });

  $(".hamburger").click(function()
{
    $(".navigation").toggleClass("open_menu");
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));

  $('li.nav-item a').removeClass('active');
  $(this).addClass('active');
  if( target.length ) {
      
      event.preventDefault();
      var top = (target.offset().top) - 140;
      $('html, body').stop().animate({
          scrollTop: top
      }, 1000);
  }
});   