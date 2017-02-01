
$(document).ready(function() {
	var scoreA = 0;
	var scoreB = 0;
	var scoreC = 0;
	var scoreD = 0;
	var game;

	var a = $('.a');
	var b = $('.b');
	var c = $('.c');
	var d = $('.d');
	
	/*
	function fadeInOut(elem) {
		elem.fadeIn(500, function () {
			elem.fadeOut(1000, function () {
				elem.fadeIn(1000)
			});
		});
	};

	var intervalA = setInterval(function(){ fadeInOut(a) }, 2500);
	var intervalB = setInterval(function(){ fadeInOut(b) }, 2500);
	var intervalC = setInterval(function(){ fadeInOut(c) }, 2500);
	var intervalD = setInterval(function(){ fadeInOut(d) }, 2500);
	*/

	$('#start').show();
	$('#intro').hide();
	$('#game').hide();

	game = false;

	
	$(document).keypress(function(e) {
		if(e.which == 65) {
			if(game == false) {
				a.stop().hide();
			} else if(game == true) {
				scoreA++;
				$('#scoreA span').html(scoreA);
			};
		};

		if(e.which == 66) {
			if(game == false) {
				b.hide();
			} else if(game == true) {
				scoreB++;
				$('#scoreB span').html(scoreB);
			};  
		};

		if(e.which == 67) {
			if(game == false) {
				c.hide();
			} else if(game == true) {
				scoreC++;
				$('#scoreC span').html(scoreC);
			};
		};

		if(e.which == 68) {
			if(game == false) {
				d.hide();
			} else if(game == true) {
				scoreD++;
				$('#scoreD span').html(scoreD);
			};
		};

		if(e.which == 13) {
			$('#start').hide();
			$('#intro').show();
			$('.a, .b, .c, .d').show();
			$('#game').hide();
		};

		if(e.which == 32){
			game = true;
			$('#start').hide();
			$('#intro').hide();
			$('#game').show();
			$('.a, .b, .c, .d').show();
			$('.background').fadeIn(30000);
		};

		if(e.which == 49) {
			game = false;
			$('#start').hide();
			$('#intro').show();
			$('.top_text, .bottom_text').html("Tel nu alle berichten die niet van je vrienden afkomstig zijn.");
			$('.a, .b, .c, .d').show();
			$('#game').hide();
		}

		if(e.which == 50) {
			$('#start').hide();
			$('#intro').hide();
			$('#game').show();
			$('.a, .b, .c, .d').show();
			$('.background').fadeIn(30000);
		}
	});
});