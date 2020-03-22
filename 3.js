$(function () {
   
    setInterval(() => {
    
       var slide_active = $('.active');
      
        
    if ($('.slide:last').hasClass('active')) {
        $('.slide:last').removeClass('active');
        $('.slide:first').addClass('active');
    
    } else {
         $('.active').removeClass('active');
         $(slide_active).next().addClass('active');
    }
    
    }, 5000);
    
    $('.next').click(function (e) { 
        e.preventDefault();
    
        var slide_active = $('.active');
      
         
     if ($('.slide:last').hasClass('active')) {
         $('.slide:last').removeClass('active');
         $('.slide:first').addClass('active');
     
     } else {
          $('.active').removeClass('active');
          $(slide_active).next().addClass('active');
     }
     
    });
    
    $('.prev').click(function (e) { 
        e.preventDefault();
    
        var slide_active = $('.active');
    
         
     if ($('.slide:first').hasClass('active')) {
         $('.slide:first').removeClass('active');
         $('.slide:last').addClass('active');
     
     } else {
          $('.active').removeClass('active');
          $(slide_active).next().addClass('active');
     }
     
    });

    $('.a1').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: 0
        }, 1000)
    });
    $('.a2').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi1').offset().top - 72
        }, 1000)
    });
    $('.a3').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi2').offset().top - 72
        }, 1000)
    });
    $('.a4').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('footer').offset().top - 72
        }, 1000)
    });
    


    $(window).scroll(function () { 
        if (window.pageYOffset >= 72) {
            $('nav').addClass('dkm');
        } else {
            $('nav').removeClass('dkm');
        }
    });
    
    
    console.log($('.slide:last'))
    console.log($('.slide:first'))
    console.log($('.slide:nth-child(2)'));
    
    });