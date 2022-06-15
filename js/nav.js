$(function(){

$(window).scroll(function(){

    if ($(document).scrollTop() >= 200 && $(document).scrollTop() < 400) {
        $('#nav').addClass('fix');
         $('#nav').removeClass('fix2');

    } else if($(document).scrollTop() >= 400){
       $('#nav').addClass('fix2');
        }

      else {

      $('#nav').removeClass('fix');
      $('#nav').removeClass('fix2');

         }//scroll-else

      })//.scroll

})