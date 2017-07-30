
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

	var primerData = [];
	var segundoData = [];
	for(i=0 ; i<20 ; i++){
		primerData.push(data[i]);
	}
	for(i=20 ; i<40 ; i++){
		segundoData.push(data[i]);
	}

	function caja(e){
		$(".pines").append('<div class="pin"><a id="' + e.id + '"><img src="../../dist/img/' + e.image_url + '" class="responsive"></img></a>' + '<div class="row">' + '<span class="title">' + e.title + '</span>' + '<p class="desc">' + e.description + '</p>' + '<p class="profile-text">' + '<img src="docs/user-pinterest.png" class="profile"></img>' + e.user + ' #' + e.hashtag + '</p>' + '</div>' + '</div>');
		

		$("#" + e.id).click(function(){
			$(".modal-info").empty();
			$(".modal-info").append('<div class="cont-modal">' + '<div class="row">' + '<i class="fa fa-upload" aria-hidden="true"></i>' + '<i class="fa fa-check" aria-hidden="true"></i>' + '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>' + '<button><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button>' + '</div>' + '<p class="title" id="' + e.id + '">' + e.title + '</p>' + '<a id="' + e.id + '"><img src="../../dist/img/' + e.image_url + '" class="responsive"></img></a>' + '<div class="row">' + '<i class="fa fa-upload" aria-hidden="true"></i>' + '<i class="fa fa-check" aria-hidden="true"></i>' + '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>' + '<button><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button>' + '</div>' + '<img src="docs/user-pinterest.png" class="profile"></img>' + '<span>' + e.user + ' #' + e.hashtag + '</span>' + '<button>Leerlo</button>' + '<p id="' + e.id + '" class="desc">' + e.description + '</p>' + '</div>');
			$(".modal").show();
		});
		$("span").click(function(){
			$(".modal").hide();
		});
	}

	primerData.forEach(function(element){
		caja(element);
	});

	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			segundoData.forEach(function(element){
				caja(element);
			});
		}
	});
})