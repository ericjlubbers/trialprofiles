$(document).foundation();
$('a.custom-close-reveal-modal').click(function(){
  $('.reveal-modal.open').foundation('reveal', 'close');
});