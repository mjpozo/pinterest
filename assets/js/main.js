
$(document).ready(function(){

	data.forEach(function(element){
		$(".container").append('<p>id: ' + element.id + '</p>' + '<p>title: ' + element.title + '</p>' + '<p>description: ' + element.description + '</p>' + '<p>user: ' + element.user + '</p>' + '<p>img: ' + element.img + '</p>');
	});
})