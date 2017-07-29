
$(document).ready(function(){

	data.forEach(function(element){
		$(".pines").append('<div class="pin"><a id="' + element.id + '"><img src="../../dist/img/' + element.image_url + '" class="responsive"></img></a>' + '<div class="row">' + '<span class="title">' + element.title + '</span>' + '<p>' + element.description + '</p>' + '<p>' + '<img src="docs/user-pinterest.png" class="profile"></img>' + element.user + ' #hashtag</p>' + '</div>' + '</div>');
		

		$("#" + element.id).click(function(){
			$(".modal-info").empty();
			$(".modal-info").append('<p id="' + element.id + '">id: ' + element.id + '</p>');
			$(".modal").show();
		});
		$("span").click(function(){
			$(".modal").hide();
		});
	});
})