$(document).ready(function (){
	$(".zdjecia_pokaz").cycle({ 
		fx:     'scrollHorz',
		speed: 	'slow',
		prev:   '.prev', 
		next:	'.next',
		pager:	'.pager',   
		timeout: 100000,
		before:	tytul 
	});
	function tytul() {
		$('.info').html(this.alt); 
} 	
});