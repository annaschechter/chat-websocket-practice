var socket = io();
$('form').submit(function(){
	socket.emit('chat message', $('#m').val());
	$('#').val('');
	return false;
});