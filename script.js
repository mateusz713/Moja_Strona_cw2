$(document).ready(function(){
//	$('img').click(function(){
//		$('img').fadeOut()
//	});
	setInterval(function(){
		$('h2').css("color","#f9ffc9")},1000);
	setInterval(function(){
		$('h2').css("color","#AB6930")},2000);
	

	$('.guzik').mouseenter(function() {
		$('.guzik').fadeTo('fast',1);
        $(this).animate({
            height: '+=10px'
        });
   });
   
   $('.guzik').mouseleave(function() {
   		$('.guzik').fadeTo('fast',0.5)
        $(this).animate({
            height: '-=10px'
        }); 
   });
   $('.pull-me').click(function(){
        $('.panel').slideToggle('slow')
   })
   

   //Ladowanie podstron:
   $('.jedynka').click(function() {
      var podstrona = $(this).attr('href');
      $('#content').html('Ładuję...');
      $('#content').loadPage(podstrona);
      return false;
   });
})
