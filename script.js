
$(document).ready(function() {
	var scoreA1 = 0;
	var scoreB1 = 0;
	var scoreC1 = 0;
	var scoreD1 = 0;

	var scoreA2 = 0;
	var scoreB2 = 0;
	var scoreC2 = 0;
	var scoreD2 = 0;

	var scoreA3 = 0;
	var scoreB3 = 0;
	var scoreC3 = 0;
	var scoreD3 = 0;

	var part1;
	var part2;
	var part3;

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

	part1 = false;
	part2 = false;
	part3 = false;

	$(document).keypress(function(e) {
		if(e.which == 65) {
			if(part1 == false && part2 == false && part3 == false) {
				a.stop().hide();
			} else if(part1 == true) {
				scoreA1++;
				$('#scoreA span').html(scoreA1);
			} else if(part2 == true) {
				scoreA2++;
				$('#scoreA span').html(scoreA2);
			} else if(part3 == true) {
				scoreA3++;
				$('#scoreA span').html(scoreA3);
			};
		};

		if(e.which == 66) {
			if(part1 == false && part2 == false && part3 == false) {
				b.hide();
			} else if(part1 == true) {
				scoreB1++;
				$('#scoreB span').html(scoreB1);
			} else if(part2 == true) {
				scoreB2++;
				$('#scoreB span').html(scoreB2);
			} else if(part3 == true) {
				scoreB3++;
				$('#scoreB span').html(scoreB3);
			};
		};

		if(e.which == 67) {
			if(part1 == false && part2 == false && part3 == false) {
				c.hide();
			} else if(part1 == true) {
				scoreC1++;
				$('#scoreC span').html(scoreC1);
			} else if(part2 == true) {
				scoreC2++;
				$('#scoreC span').html(scoreC2);
			} else if(part3 == true) {
				scoreC3++;
				$('#scoreC span').html(scoreC3);
			};
		};

		if(e.which == 68) {
			if(part1 == false && part2 == false && part3 == false) {
				d.hide();
			} else if(part1 == true) {
				scoreD1++;
				$('#scoreD span').html(scoreD1);
			} else if(part2 == true) {
				scoreD2++;
				$('#scoreD span').html(scoreD2);
			} else if(part3 == true) {
				scoreD3++;
				$('#scoreD span').html(scoreD3);
			};
		};

		//press enter
		if(e.which == 13) {
			$('#start').hide();
			$('#intro').show();
			$('.a, .b, .c, .d').show();
			$('#game').hide();
			$('#eindscore').hide();
		};

		//press space
		if(e.which == 32){
			part1 = true;
			$('#start').hide();
			$('#intro').hide();
			$('#game').show();
			$('#eindscore').hide();
			$('.a, .b, .c, .d').show();
			$('.background').fadeIn(30000);
		};

		//press 1
		if(e.which == 49) {
			part1 = false;
			$('#start').hide();
			$('#intro').show();
			$('.top_text, .bottom_text').html("Tel nu alle berichten die niet van je vrienden afkomstig zijn.");
			$('.a, .b, .c, .d').show();
			$('#game').hide();
			$('#eindscore').hide();
		};

		//press 2
		if(e.which == 50) {
			part2 = true;
			$('#start').hide();
			$('#intro').hide();
			$('#game').show();
			$('#eindscore').hide();
			$('span').html(0);
			$('.a, .b, .c, .d').show();
			$('.background').hide();
			$('.background').fadeIn(30000);
		};

		//press 3
		if(e.which == 51) {
			part2 = false;
			$('#start').hide();
			$('#intro').show();
			$('.top_text, .bottom_text').html("Bekijk je advertentievoorkeuren. Hoeveel berichten die je net zag komen overeen met deze interesses?");
			$('.a, .b, .c, .d').show();
			$('#game').hide();
			$('#eindscore').hide();
		};

		//press 4
		if(e.which == 52) {
			part3 = true;
			$('#start').hide();
			$('#intro').hide();
			$('#game').show();
			$('#eindscore').hide();
			$('span').html(0);
			$('.a, .b, .c, .d').show();
			$('.background').hide();
			$('.background').fadeIn(30000);
		};

		if(e.which == 48) {
			part3 = false;
			$('#start').hide();
			$('#intro').hide();
			$('#game').hide();
			$('#eindscore').show();
			3
			eindscoreA = (scoreA1 - scoreA2) / scoreA3;
			eindscoreB = (scoreB1 - scoreB2) / scoreB3;
			eindscoreC = (scoreC1 - scoreC2) / scoreC3;
			eindscoreD = (scoreD1 - scoreD2) / scoreD3;
		}
	});
});