"use strict";

//Global variables

//Number of videos 
var numberOfVideos = 5;

//Number of pictures in gallery 
var numberOfPictures = 22;

//To keep track of video descriptions
var previousVideoDescription;

//youtube player
var youtubePlayer;

function hideCarouselControls() {
    var carouselControls = document.getElementsByClassName('remove-on-play');
    
       for(var i=0;i<carouselControls.length;i++){
    carouselControls[i].style.visibility= 'hidden';
    }
    
    $("#documentoryCarousel").carousel("pause");
    
}

function showCarouselControls() {
    var carouselControls = document.getElementsByClassName('remove-on-play');
    
       for(var i=0;i<carouselControls.length;i++){
    carouselControls[i].style.visibility= 'visible';
    }
    
    $("#documentoryCarousel").carousel("cycle");
    
}

function scrollToId(obj) {

        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: (obj.offset().top - 50)
        }, 1250, 'easeInOutExpo');
    
}



function unloadLastVideo(){
    
        
        var str = previousVideoDescription.attr("id");
        var array = str.split('Description');
        var videoNumber = array[1];
    
        var lastVideo = $('#video' + videoNumber);     
          
    if(lastVideo.attr("class") == 'vimeoPlayer'){
        
        var player = $('iframe');
        var playerOrigin = '*';
        
        var data = {
          method: 'unload'
        };
    
         data.value = 'pause';
        
        var message = JSON.stringify(data);
         
         player[videoNumber].contentWindow.postMessage(data, playerOrigin);
        
    }
    
    else
    {
        if(youtubePlayer.getPlayerState() == 1 || youtubePlayer.getPlayerState() == 3 ){
            
            youtubePlayer.stopVideo();
            showCarouselControls();
        }
    }
       
}



$(window).load( function() {
    
    /*
    // Init Video Masonry grid
    var $videoGrid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    gutter: '.gutter-sizer',
    columnWidth: '.grid-sizer',
    transitionDuration: '0.4s',
    isAnimated: true
  });
    
    */


    /*
    $grid.on( 'click', '.grid-item', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante');
    // trigger layout
    $grid.masonry('layout');
  });
  */

//Youtube variables
    
      
   
    
});




$(document).ready(function(){
   
    var documentoryCarousel = $("#documentoryCarousel");
    var videography = $("#videography");
    var modalImage = $('#modalImage');
    previousVideoDescription = $('#videoDescription0');
    
    // Activate Carousel
    //documentoryCarousel.carousel({interval: 4000});
    
    documentoryCarousel.carousel({interval: false});

    //Click handlers for video thumbnails
    for(var i=0;i<numberOfVideos;i++){
        $( "#" + i).click(function() {
            documentoryCarousel.carousel('pause');
            scrollToId(videography);
            documentoryCarousel.carousel(parseInt($(this).attr('id'),10));
        });
    }
    
        //Click handlers for picture thumbnails
    for(var i=0;i<numberOfPictures;i++){
        $( "#photo-" + i).click(function() {
            //var src = imagesPath + "photo" + i ;
            var str = $(this).attr("id");
            var array = str.split('-');
            modalImage.attr("src", $("#image" + array[1]).attr("src"));
        });
    }
   
    //Event handler for when a video changes--> change description
    documentoryCarousel.on('slid.bs.carousel', function () {
        
    
        var carouselData = $(this).data('bs.carousel');
        var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
        var changedVideoDescription = $("#videoDescription" + currentIndex);
        
        previousVideoDescription.hide();
        changedVideoDescription.show();
        previousVideoDescription = changedVideoDescription;
  
    });
    

    
     $(".carousel-control").click(function() {
     //Tell video from previous slide to unload when change video
        unloadLastVideo();
         
        });
    
    
      $(".portfolio-box").click(function() {
        
        unloadLastVideo();
         
        });
    
       $(".carousel-indicators").click(function() {
        
        unloadLastVideo();
         
        });
    
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    
            // Init Video Masonry grid
    var $videoGrid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 0,
  });
    
 
       // Init Gallery Masonry grid
    var $galleryGrid = $('.gridGallery').masonry({
    itemSelector: '.gridGallery-item',
    columnWidth: 160,
    transitionDuration: '0.4s',
    isAnimated: true
  });
    
    // layout Masonry grid after each image loads
    $videoGrid.imagesLoaded().progress( function() {
    $videoGrid.masonry();
  }); 
    
    $galleryGrid.imagesLoaded().progress( function() {
    $galleryGrid.masonry();
  }); 
    
    
});


//Youtube API

function onYouTubeIframeAPIReady() {
    
        youtubePlayer = new YT.Player('video4', {
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
    
    
}

function onPlayerStateChange(event) {
          
        if (event.data == YT.PlayerState.PLAYING) {
            hideCarouselControls();
        }
        else if(event.data == YT.PlayerState.PAUSED){
            showCarouselControls();
        }

}



// VIMEO adding event listeners for pause and play of multiple videos using API 
$(function() {
    var player = $('.vimeoPlayer');
    var playerOrigin = '*';
    

    // Listen for messages from the player
    if (window.addEventListener) {
        window.addEventListener('message', onMessageReceived, false);
    }
    else {
        window.attachEvent('onmessage', onMessageReceived, false);
    }

    // Handle messages received from the player
    function onMessageReceived(event) {
        // Handle messages from the vimeo player only
        if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
            return false;
        }
        
        if (playerOrigin === '*') {
            playerOrigin = event.origin;
        }
        
        var eventdata = JSON.stringify(event.data)
        var data = JSON.parse(eventdata);
        
        switch (data.event) {
            case 'ready':
                onReady();
                break;
               
            case 'play':
                play();
                break;
                
            case 'pause':
                onPause();
                break;
               
        }
    }

    // Call the API when a button is pressed
    $('button').on('click', function() {
        post($(this).text().toLowerCase());
    });

    // Helper function for sending a message to the player
    function post(action, value) {
        var data = {
          method: action
        };
        
        if (value) {
            data.value = value;
        }
        
        var message = JSON.stringify(data);
        
              for (var i = 0, length = player.length; i < length; i++) {
                player[i].contentWindow.postMessage(data, playerOrigin);
            }
            
    }
    
    

    function onReady() {
        post('addEventListener', 'pause');
        post('addEventListener', 'play');
    }

    function onPause() {
        showCarouselControls();
    }

    function play() {
          hideCarouselControls();
    }
});



  