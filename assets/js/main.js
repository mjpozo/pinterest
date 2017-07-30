
$(document).ready(function(){

	/*data.forEach(function(element){
		$(".pines").append('<div class="pin"><a id="' + element.id + '"><img src="../../dist/img/' + element.image_url + '" class="responsive"></img></a>' + '<div class="row">' + '<span class="title">' + element.title + '</span>' + '<p class="desc">' + element.description + '</p>' + '<p class="profile-text">' + '<img src="docs/user-pinterest.png" class="profile"></img>' + element.user + ' #' + element.hashtag + '</p>' + '</div>' + '</div>');
		

		$("#" + element.id).click(function(){
			$(".modal-info").empty();
			$(".modal-info").append('<div class="cont-modal">' + '<div class="row">' + '<i class="fa fa-upload" aria-hidden="true"></i>' + '<i class="fa fa-check" aria-hidden="true"></i>' + '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>' + '<button><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button>' + '</div>' + '<p class="title" id="' + element.id + '">' + element.title + '</p>' + '<a id="' + element.id + '"><img src="../../dist/img/' + element.image_url + '" class="responsive"></img></a>' + '<div class="row">' + '<i class="fa fa-upload" aria-hidden="true"></i>' + '<i class="fa fa-check" aria-hidden="true"></i>' + '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>' + '<button><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button>' + '</div>' + '<img src="docs/user-pinterest.png" class="profile"></img>' + '<span>' + element.user + ' #' + element.hashtag + '</span>' + '<button>Leerlo</button>' + '<p id="' + element.id + '" class="desc">' + element.description + '</p>' + '</div>');
			$(".modal").show();
		});
		$("span").click(function(){
			$(".modal").hide();
		});
	});*/
	for (i=0 ; i<20 ; i++){
		$(".pines").append('<div class="pin"><a id="' + data[i].id + '"><img src="../../dist/img/' + data[i].image_url + '" class="responsive"></img></a>' + '<div class="row">' + '<span class="title">' + data[i].title + '</span>' + '<p class="desc">' + data[i].description + '</p>' + '<p class="profile-text">' + '<img src="docs/user-pinterest.png" class="profile"></img>' + data[i].user + ' #' + data[i].hashtag + '</p>' + '</div>' + '</div>');
		

		$("#" + data[i].id).click(function(){
			$(".modal-info").empty();
			$(".modal-info").append('<div class="cont-modal">' + '<div class="row">' + '<i class="fa fa-upload" aria-hidden="true"></i>' + '<i class="fa fa-check" aria-hidden="true"></i>' + '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>' + '<button><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button>' + '</div>' + '<p class="title" id="' + data[i].id + '">' + data[i].title + '</p>' + '<a id="' + data[i].id + '"><img src="../../dist/img/' + data[i].image_url + '" class="responsive"></img></a>' + '<div class="row">' + '<i class="fa fa-upload" aria-hidden="true"></i>' + '<i class="fa fa-check" aria-hidden="true"></i>' + '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>' + '<button><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button>' + '</div>' + '<img src="docs/user-pinterest.png" class="profile"></img>' + '<span>' + data[i].user + ' #' + data[i].hashtag + '</span>' + '<button>Leerlo</button>' + '<p id="' + data[i].id + '" class="desc">' + data[i].description + '</p>' + '</div>');
			$(".modal").show();
		});
		$("span").click(function(){
			$(".modal").hide();
		});
	}

	//en vez de ser un foreach se ua un for del 1 al 20 y dentro del if se pone la condicion del 21 al 40
	$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       for (i=20 ; i<40 ; i++){
		$(".pines").append('<div class="pin"><a id="' + data[i].id + '"><img src="../../dist/img/' + data[i].image_url + '" class="responsive"></img></a>' + '<div class="row">' + '<span class="title">' + data[i].title + '</span>' + '<p class="desc">' + data[i].description + '</p>' + '<p class="profile-text">' + '<img src="docs/user-pinterest.png" class="profile"></img>' + data[i].user + ' #' + data[i].hashtag + '</p>' + '</div>' + '</div>');
		

		$("#" + data[i].id).click(function(){
			$(".modal-info").empty();
			$(".modal-info").append('<div class="cont-modal">' + '<div class="row">' + '<i class="fa fa-upload" aria-hidden="true"></i>' + '<i class="fa fa-check" aria-hidden="true"></i>' + '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>' + '<button><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button>' + '</div>' + '<p class="title" id="' + data[i].id + '">' + data[i].title + '</p>' + '<a id="' + data[i].id + '"><img src="../../dist/img/' + data[i].image_url + '" class="responsive"></img></a>' + '<div class="row">' + '<i class="fa fa-upload" aria-hidden="true"></i>' + '<i class="fa fa-check" aria-hidden="true"></i>' + '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>' + '<button><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button>' + '</div>' + '<img src="docs/user-pinterest.png" class="profile"></img>' + '<span>' + data[i].user + ' #' + data[i].hashtag + '</span>' + '<button>Leerlo</button>' + '<p id="' + data[i].id + '" class="desc">' + data[i].description + '</p>' + '</div>');
			$(".modal").show();
		});
		$("span").click(function(){
			$(".modal").hide();
		});
	}
   }
});

})