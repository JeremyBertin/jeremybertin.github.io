jQuery(document).ready(function($){
	"use strict";
	
	//Index keeper for current active element
    var $currentIndex = 0;
	
	var $timer;
	
	var children;
	
	var indicators;
	
	var $interval;
	
	//Video special stuff
	var player = new Vimeo.Player($('#vrTrailer'));
	
	   player.on('play', function() {
		var videoIndex = 1;
	   if( $currentIndex !== videoIndex){
			var currentElement = children.get($currentIndex);
			var nextElement = children.get(videoIndex);
					 
			$(currentElement).fadeOut(800,'easeOutQuad');
			$(nextElement).fadeIn(1000,'easeOutQuad');
					 
			$(indicators.get($currentIndex)).removeClass('active');
			$(indicators.get($index)).addClass('active');
			
			$currentIndex = $index;
	   }
	   
       clearInterval($timer);	
    });
	
//for each of this type add a timer to change currently active item
     $('.items-fade-in-and-out-container').each( function() {
	 
		 $interval = $(this).attr("interval");
		   
         children =  $('.items-fade-in-and-out-container').children();
		 indicators = $('.carousel-indicators').children();
		   
         $timer = setInterval(getNextDiv,$interval);
     });
	 
	 
	 /*Event handlers for buttons*/
	$('#next').on('click', function(event) {
	
		event.preventDefault();
		
		clearInterval($timer);
		
		getNextDiv();
		
		
		
	});
	
		 /*Event handlers for buttons*/
	$('#prev').on('click', function(event) {
	
		event.preventDefault();
		
		clearInterval($timer);
		
		getPreviousDiv();
		
		
		
	});
	
	$('.select-index').on('click', function(event) {
	
		event.preventDefault();
		
		var $index = $(this).attr("data-slide-to");
		
		if($index != $currentIndex){
		
		var currentElement = children.get($currentIndex);
		var nextElement = children.get($index);
				 
		$(currentElement).fadeOut(100,'easeOutQuad');
		$(nextElement).fadeIn(1300,'easeOutQuad');
				 
		$(indicators.get($currentIndex)).removeClass('active');
		$(indicators.get($index)).addClass('active');
		
		$currentIndex = $index;
		}
		
		clearInterval($timer);
		
		$timer = setInterval(getNextDiv, $interval);
		
	});
	
 
	function getNextDiv() {

	var nextIndex = $currentIndex + 1;
             
    if(nextIndex >= children.length)
        nextIndex = 0;
             
    var currentElement = children.get($currentIndex);
    var nextElement = children.get(nextIndex);
             
    $(currentElement).fadeOut(100,'easeOutQuad');
    $(nextElement).fadeIn(1300,'easeOutQuad');
	
	$(indicators.get($currentIndex)).removeClass('active');
 	$(indicators.get(nextIndex)).addClass('active');
	
    $currentIndex = nextIndex;
	
	
}

function getPreviousDiv() {

	var nextIndex = $currentIndex - 1;
             
    if(nextIndex < 0)
        nextIndex = children.length - 1;
             
    var currentElement = children.get($currentIndex);
    var nextElement = children.get(nextIndex);
             
    $(currentElement).fadeOut(100,'easeOutQuad');
    $(nextElement).fadeIn(1300,'easeOutQuad');
	
	$(indicators.get($currentIndex)).removeClass('active');
 	$(indicators.get(nextIndex)).addClass('active');
	
    $currentIndex = nextIndex;
			 
}

});





