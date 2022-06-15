/*
 HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
$(function(){
	var sta = 0
    $('.spinner-spin').click(function(){
       // $(this).toggleClass('on');
      if(sta == 0) {
           $(this).addClass('on');   
           $('.nav').fadeIn();
           sta = 1; 
      }
	  
	  else{
          $(this).removeClass('on');
          $('.nav').fadeOut();
          sta = 0; 
      }
    });

   if($(window).width() < 785) {
		$(this).removeClass('on');
		$('.nav').fadeOut();
		sta = 1;
   } 
   	else {
	$(this).removeClass('on');
	$('.nav').fadeIn();
	sta = 0;
}

   $(window).resize(function(){
	if($(window).width() > 785) {
		$(this).removeClass('on');
		$('.nav').fadeIn();
		sta = 1;
    } else {
		$(this).removeClass('on');
		$('.nav').fadeOut();
		sta = 0;
	}
   });//모바일 네비 fade

   $('.gnb > li').each(function(){
	
	 $(this).click(function(){
		$('.gnb > li').removeClass('active');
		$(this).addClass('active')
		
	 });
	 
  }); //each


    $('.wrap').scroll(function(){
	/*
		if ($(document).scrollTop() >= 200 && $(document).scrollTop() < 400) {
			$('#header').addClass('fix');
			$('#header').removeClass('fix2');
		 } else if ($(document).scrollTop() >= 400){
		 //  $('#header').removeClass('fix');
		   $('#header').addClass('fix2');
		 }
		  else {
			$('#header').removeClass('fix');
			$('#header').removeClass('fix2');
		 }
	 })*/

	
		/********FIRST SECTION**************/
		if ($('.wrap').scrollTop() >= $('.first-section').position().top - 0) {
    		$('.first-section').removeClass('show-animation');
		    $('.first-section').addClass('show-animation');
		}
		else{
			$('.first-section').removeClass('show-animation');
		}


		/********SECOND SECTION**************/
		if ($(this).scrollTop() >= $('.second-section').position().top - 150) {
    		$('.second-section').removeClass('show-animation');
		    $('.second-section').addClass('show-animation');
		}
		else{
			$('.second-section').removeClass('show-animation');
		}

		/********SECOND SECTION-1**************/
		if ($(this).scrollTop() >= $('.second-section-1').position().top - 250) {
    		$('.second-section-1').removeClass('show-animation');
		    $('.second-section-1').addClass('show-animation');
		}
		else{
			$('.second-section-1').removeClass('show-animation');
		}


		/********THIRD SECTION**************/
		if ($(this).scrollTop() >= $('.third-section').position().top - 350) {
    		$('.third-section').removeClass('show-animation');
		    $('.third-section').addClass('show-animation');
		}

		else{
			$('.third-section').removeClass('show-animation');
		}


		/********FOURTH SECTION**************/
		if ($(this).scrollTop() >= $('.fourth-section').position().top - 450) {
    		$('.fourth-section').removeClass('show-animation');
		    $('.fourth-section').addClass('show-animation');
		}

		else{
			$('.fourth-section').removeClass('show-animation');
		}

   });

  
	$('#container').pinterest_grid({
		no_columns: 4
	});

	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};

	var magnifVideo = function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
	};

	


	// Call the functions 
	magnifPopup();
	magnifVideo();
 
	
})
//ready