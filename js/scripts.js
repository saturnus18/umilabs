$(document).ready(function(){
  $("#submit_first").click(function(){
      if($('#name').val() == ''){
          $('#name').addClass('error');
          //$('#summ').effect("shake", { times:3 }, 50); 
      } else {

      }
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if($('#mail').val() == '' || reg.test($('#mail').val()) == false){
          $('#mail').addClass('error');
          //$('#summ').effect("shake", { times:3 }, 50); 
      } else {

      }
      var phoneno = /^\+?([0-9]{1})\)?[ ]?(\([0-9]{3}\))[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
      if($('#tel').val() == '' || phoneno.test($('#tel').val()) == false){
          $('#tel').addClass('error');
          //$('#summ').effect("shake", { times:3 }, 50); 
      } else {

      }
      if($('#work').val() == ''){
          $('#work').addClass('error');
          //$('#summ').effect("shake", { times:3 }, 50); 
      } else {

      }
  });
	// Get message after sent
	// $('#getintouch .p-sbm').click(function(){
 //        $('#get-success').empty();
 //        setTimeout(function(){
 //          var text = $('#getintouch .wpcf7-response-output').text();          
 //          $('#get-success').html(text);
 //        }, 2000);
 //    });

	/*=== Check box disabled/enabled===*/
	// $('#agree').change(function() {
	//     if ($(this).is(':checked')) {
	//         $('#organise-submit').prop('disabled', false);
	//     } else {
	//         $('#organise-submit').prop('disabled', true);
	//     }
	// });
	/*=== Check box disabled/enabled===*/

	// $('.register').click(function(){
	// 	var section2 = $('.blue_section').offset().top;                
	// 	$('html, body').animate({scrollTop:section2}, 1000);  
	// }); 
    /*=== Hide Placeholder on focus===*/
    // $('.hideplaceholder').focus(function(){
    //     $(this).attr('data-val', $(this).attr('placeholder'));
    //     $(this).attr('placeholder', '');
    // });
    // $(".hideplaceholder").blur(function(){
    //     $(this).attr('placeholder', $(this).attr('data-val'));
    // });
    /*===// Hide Placeholder on focus===*/


	// $('.latest_box').owlCarousel({
	// 	items: 1,
	//     autoplay: true,
	//     loop: true,
	//     autoplayTimeout: 4000,
	//     dots: false,    
	//     nav: true,
	//     navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
	// });


	// $('.hamburger').click(function(){
	// 	$(this).toggleClass('is-active');
	// });	

   // var mql = window.matchMedia('all and (max-width: 768px)');
   //  if (mql.matches) {
   //      $('.navbar .dropdown').append('<div class="caretbox hidden-sm hidden-md hidden-lg"><i class="fa fa-angle-down" aria-hidden="true"></i></div>');
   //          $('.navbar li.dropdown > .caretbox').click(function(){
   //              $(this).parent().toggleClass('open');
   //              return false;
   //          });
   //  } else {

   //      //dropdown on hover
   //      $('.navbar .dropdown').hover(function() {
   //          $(this).addClass('open');
   //      }, function() {
   //          $(this).removeClass('open');
   //      }); 

   //      //bootstrap parent link click
   //      $('.navbar .navbar-nav>li a').click(function(){
   //          location.href = this.href;
   //      });
   //  }
});