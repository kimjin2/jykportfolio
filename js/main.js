/*
 HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
$(function(){
	
	$(".t1").stop().animate({'left':500, top:250},1500);
	$(".t2").stop().animate({'left':800, top:500},1500);
	$(".t3").stop().animate({'left':1000, top:300},1500);
	var menu = $(".gnb > li ");
	var content = $("section");//section 으로 변경할 부분
	
	menu.click(function(event){
		/*preventDefault 는 a 태그 처럼 클릭 이벤트 외에 
별도의 브라우저 행동을 막기 위해 사용됩니다.*/
		event.preventDefault();
		
		//사용자가 클릭한 li
		var tg = $(this);
		//순서값을 찾는 함수 index()
		var idx = tg.index();
		//선택한 li와 순서가 같은 content 를 찾음 eq()
		var section = content.eq(idx);
		//선택된 영역의 top 의 좌표값을 저장
		//.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동하게 합니다.
		var tt = section.offset().top;
 
		//스크롤이 tt의 값에 맞게 움직이게
	$(".wrap").stop().animate({scrollTop:tt});
		});//menu.click() 끝
		
		// 윈도우에서 scroll() 스크롤이 작동될 때 일어날 일.
		$(".wrap").scroll(function(){
		//.scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정합니다.
		var location = $(window).scrollTop();
		
		content.each(function() {
			//반복문(each)
      		var tg = $(this);
			var idx = tg.index();
			
			if(tg.offset().top - 50 <= location){  //active 위치가 안맞으면 location + 위치값 을 추가하면 됨
				menu.removeClass("active");
				menu.eq(idx).addClass("active");
				}
			

    });//each() 끝
			});//scroll() 끝

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

	if($(window).width() > 785){
		$(".t1").stop().animate({'left':200, top:150},1500);
     	$(".t2").stop().animate({'left':400, top:250},1500);
	    $(".t3").stop().animate({'left':500, top:100},1500);
		sta = 0
	}


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
		if ($(this).scrollTop() >= $('.second-section').position().top - 100) {
    		$('.second-section').removeClass('show-animation');
		    $('.second-section').addClass('show-animation');
		}
		else{
			$('.second-section').removeClass('show-animation');
		}

		/********SECOND SECTION-1**************/
		if ($(this).scrollTop() >= $('.second-section-1').position().top - 200) {
    		$('.second-section-1').removeClass('show-animation');
		    $('.second-section-1').addClass('show-animation');
		}
		else{
			$('.second-section-1').removeClass('show-animation');
		}


		/********THIRD SECTION**************/
		if ($(this).scrollTop() >= $('.third-section').position().top - 300) {
    		$('.third-section').removeClass('show-animation');
		    $('.third-section').addClass('show-animation');
		}

		else{
			$('.third-section').removeClass('show-animation');
		}


		/********FOURTH SECTION**************/
		if ($(this).scrollTop() >= $('.fourth-section').position().top - 400) {
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
	var li_count = $('.thum_list div').length;
	var click_count = 2;
	//alert(li_count)
	/*for(var count=0;count < li_count;count++){
	   $('.thum_list li a').eq(count).text(count+1);
	}*/
 
   for(var count = 0;count < click_count * 4;count++){
	   $('.thum_list div').eq(count).show();
	}
	   //클릭수만큼 li 보이기
   $('.more').click(function(){
	   click_count += 2;
	   //alert(Math.ceil(li_count/4));
	   if(Math.ceil(li_count/4) > click_count){
		 //alert(click_count);
		 li_show(click_count)
	   }else if(Math.ceil(li_count/4) == click_count) {
		   li_show(click_count)
		   $('.more').text('줄이기');     
		 } else {
		   $('.thum_list div').hide()
		   click_count = 2;     
		   $('.more').text('더보기');
		   li_show(click_count)
		 }
	  })
   })//전체
   function li_show(click_count){
	   for(var count = 0;count < click_count * 4;count++){
		 $('.thum_list div').eq(count).show();
		 } 

		 

}
//ready