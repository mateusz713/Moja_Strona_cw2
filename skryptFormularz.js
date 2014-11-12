function sprawdz() {
if (document.forms[0].tekscik.value=="") {
  alert("Musisz cos wprowadzić\nw pole 'Imię' !");
  return false;
  
} else if (document.forms[0].tekscik2.value=="") {
	alert("Musisz cos wprowadzić\nw pole 'Nazwisko' !");
  return false;

} else if (document.forms[0].tekscik3.value=="") {
	alert("Musisz cos wprowadzić\nw pole 'E-Mail' !");
  return false;

} else if (document.forms[1].wiadomosc.value=="") {
	alert("Musisz cos wprowadzić\nw pole 'Wiadomość' !");
  return false;

} else {
  return true;
}
}


$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('outline-color','#FF0000')
    })
})