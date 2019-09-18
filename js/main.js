$(document).ready(function(){
    $('.search-job').addClass('animated bounce');

   wow = new WOW(
    {
      animateClass: 'animated',
      offset:       500,
      mobile: true
    }
  );
  wow.init();


  $('.owl-carousel').owlCarousel({
    items:1,
    autoplay:true,
    loop:true,
    nav : true
  });

  $('.counter').counterUp({
    time: 1500
  });

  $('.close').click(function(){
    $('.modal-bg').hide(500);
    $('body').css('overflow-y','visible');
  });
  $('#signUp').click(function(){
    $(this).css('href',function(){
      $('.modal-bg').css('display','flex').show(500);
      $('body').css('overflow-y','hidden');
    })
  })

 $('#loginGo').click(function(){
  $('.modal-bg').hide(500);
  $('body').css('overflow-y','visible');
 });




 
 $('#name').on('blur',function testLength(){
 if($(this).val().length < 5 ){
    event.preventDefault()
   $('#msg').css('color','red');
   $('#formSignUp').addClass('animated shake')
   $('#msg').text('Should Enter at least 5 charachter ');
 }else{
  $('#msg').text('');
  $('#formSignUp').removeClass('animated shake')

 }
 })


  $('#confirm').on('blur',function(){
    if($('#pass').val() !== $('#confirm').val()){
      event.preventDefault()
      $('#msg').css('color','red');
      $('#formSignUp').addClass('animated shake')
      $('#msg').text('passwords not similler ');
      
    }else{
      $('#msg').html('');
      $('#formSignUp').removeClass('animated shake')
      
    }
   })

   $('#submitbtn').on('click',function(){
     if($('#name').val() && $('#email').val() && $('#pass').val()){
        $('#msg').text('')
     }else{
       event.preventDefault();
       $('#msg').css('color','red');
       $('#msg').text('Enter Any thing ')
     }
   })

   $('#submitbtnSignIn').on('click',function(){
    if($('#Signemail').val() && $('#Signpass').val()){
       $('#msgIn').text('')
    }else{
      event.preventDefault();
      $('#msgIn').css('color','red');
      $('#msgIn').text('Enter Any thing ')
    }
  });


  var btn = $('#buttonTopBottom');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.removeClass('hideButtonTop');
      btn.addClass('showButtonTop');
      
    } else {
      btn.removeClass('showButtonTop');
      
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });





  

});




  $('.js-preloader').preloadinator({
    animation: 'fadeOut',
    animationDuration: 2000,
    scroll:true
  
})
