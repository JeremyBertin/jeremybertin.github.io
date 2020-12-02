"use strict";

var $banner = $('.manic-banner');
var $win = $(window);

$banner.addClass('show');

$win.scroll(function () {
    
  if ($win.scrollTop() == 0){
    if(!($banner.hasClass('show'))){
        $banner.addClass('show');
    } 
  }
  else{
       $banner.removeClass( "show" )
  }
});

$(document).ready(function(){
    
 var modalImage = $('#modalImage');
 var modalImageFolder = "../img/Media/optimized-large/";
    
 var currentPageHash = window.location.hash;
    


    
    $( "#screeningsLink" ).click(function(event) {
        
        //prevent defaults since comes from a link tag
          event.preventDefault();

        //change active menu item
        $(".active").removeClass("active");
        $(this).addClass("active");
        
        //get the currently active page
        var current = $(".active-page");
        var newCurent = $("#screeningPage");

        if(!(newCurent.hasClass('active-page'))){
            
            //add active page to the next current page so that it\s animation is visible
            newCurent.addClass("active-page");
            current.removeClass('active-page');
            
            window.scrollTo(0, 0);

        }
        else{
            $('html, body').stop().animate({
            scrollTop: (newCurent.offset().top - 50)
        }, 1250, 'easeInOutExpo');
        }

        
    });
    
        $( "#manicLogo" ).click(function(event) {
        
        //prevent defaults since comes from a link tag
          event.preventDefault();
            
             //change active menu item
        $(".active").removeClass("active");
        $(this).addClass("active");

        //get the currently active page
        var current = $(".active-page");
        var newCurent = $("#homepage");

        if(!(newCurent.hasClass('active-page'))){
            
            //add active page to the next current page so that it\s animation is visible
            newCurent.addClass("active-page");
            current.removeClass('active-page');
            window.scrollTo(0, 0);
        }
        else{
            $('html, body').stop().animate({
            scrollTop: (newCurent.offset().top - 50)
        }, 1250, 'easeInOutExpo');
        }

    });
    
         $( "#pressLink" ).click(function(event) {
        
        //prevent defaults since comes from a link tag
          event.preventDefault();
            
             //change active menu item
        $(".active").removeClass("active");
        $(this).addClass("active");

        //get the currently active page
        var current = $(".active-page");
        var newCurent = $("#pressPage");

        if(!(newCurent.hasClass('active-page'))){
            
            //add active page to the next current page so that it\s animation is visible
            newCurent.addClass("active-page");
            current.removeClass('active-page');
            window.scrollTo(0, 0);
        }
        else{
            $('html, body').stop().animate({
            scrollTop: (newCurent.offset().top - 50)
        }, 1250, 'easeInOutExpo');
        }

    });
        
         $( "#mediaLink" ).click(function(event) {
        
        //prevent defaults since comes from a link tag
          event.preventDefault();
            
             //change active menu item
        $(".active").removeClass("active");
        $(this).addClass("active");

        //get the currently active page
        var current = $(".active-page");
        var newCurent = $("#mediaPage");

        if(!(newCurent.hasClass('active-page'))){
            
            //add active page to the next current page so that it\s animation is visible
            newCurent.addClass("active-page");
            current.removeClass('active-page');
            window.scrollTo(0, 0);
            
               var $videoGrid = $('.grid').masonry({
                itemSelector: '.grid-item'
              });
        }
        else{
            $('html, body').stop().animate({
            scrollTop: (newCurent.offset().top - 50)
        }, 1250, 'easeInOutExpo');
        }

    });
    
    
    $('.show-content').each(function(i, obj) {
    
    $(this).click(function(event) {
        
        //prevent defaults since comes from a link tag
          event.preventDefault();
            
        //change active menu item
        $(".active").removeClass("active");
        $(this).addClass("active");

        //get the currently active page
        var current = $(".active-element");
        var newCurent = $( $(this).attr("target") );

        if(!(newCurent.hasClass('active-element'))){
            
            //add active page to the next current page so that it\s animation is visible
            newCurent.addClass('active-element');
            current.removeClass('active-element');
            window.scrollTo(0, 0);
        }
        else{
           
        }

    });
        
    });
    
        
    
    
         //Click handler for modal images
        $( '.modalImages').click(function() {
            modalImage.attr("src", modalImageFolder + $(this).attr("data-target"));
        });
    
    
        if(currentPageHash) {
      if(currentPageHash == "#screenings"){
           $("#screeningsLink").click();
      }
      else if(currentPageHash == "#press"){
            $("#pressLink").click();
        }
       else if(currentPageHash == "#media"){
             $("#mediaLink").click();
        }
    } 
    else {
    }
   
    
});

    /*
            //add animation classes
            current.addClass('moveFromLeftFade');
            newCurent.addClass("pt-page-moveFromRight");

            //On animation end events for each 
            current.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
                current.removeClass('moveFromLeftFade');
                current.removeClass('active-page');
            });


            newCurent.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
                newCurent.removeClass('pt-page-moveFromRight');
            });
            */