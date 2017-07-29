
$(document).ready(function(){

	data.forEach(function(element){
		$(".container").append('<div class="pin"><a id="' + element.id + '"><img src="../../dist/img/' + element.image_url + '" class="responsive"></img></a>' + '<p>title: ' + element.title + '</p>' + '<p>description: ' + element.description + '</p>' + '<p>user: ' + element.user + '</p>' + '</div>');
		

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