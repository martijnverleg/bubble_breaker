
$(document).ready(function() {
	var score = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];

	var part1;
	var part2;
	var part3;

	var stage = 0;

	var a = $('.a');
	var b = $('.b');
	var c = $('.c');
	var d = $('.d');

	var start = $('#start');
	var intro = $('#intro');
	var game = $('#game');
	var end = $('#eindscore');

	part1 = false;
	part2 = false;
	part3 = false;

	$('.wrapper').hide();

	$(document).keypress(function(e) {
		//score
		// A
		if(e.which == 65) {
			if(part1 == false && part2 == false && part3 == false) {
				a.stop().hide();
			} else if(part1 == true) {
				score[0][0]++;
				$('#scoreA span').html(score[0][0]);
			} else if(part2 == true) {
				score[1][0]++;
				$('#scoreA span').html(score[1][0]);
			} else if(part3 == true) {
				score[2][0]++;
				$('#scoreA span').html(score[2][0]);
			};
		};

		// B
		if(e.which == 66) {
			if(part1 == false && part2 == false && part3 == false) {
				b.hide();
			} else if(part1 == true) {
				score[0][1]++;
				$('#scoreB span').html(score[0][1]);
			} else if(part2 == true) {
				score[1][1]++;
				$('#scoreB span').html(score[1][1]);
			} else if(part3 == true) {
				score[2][1]++;
				$('#scoreB span').html(score[2][1]);
			};
		};

		// C
		if(e.which == 67) {
			if(part1 == false && part2 == false && part3 == false) {
				c.hide();
			} else if(part1 == true) {
				score[0][2]++;
				$('#scoreC span').html(score[0][2]);
			} else if(part2 == true) {
				score[1][2]++;
				$('#scoreC span').html(score[1][2]);
			} else if(part3 == true) {
				score[2][2]++;
				$('#scoreC span').html(score[2][2]);
			};
		};

		// D
		if(e.which == 68) {
			if(part1 == false && part2 == false && part3 == false) {
				d.hide();
			} else if(part1 == true) {
				score[0][3]++;
				$('#scoreD span').html(score[0][3]);
			} else if(part2 == true) {
				score[1][3]++;
				$('#scoreD span').html(score[1][3]);
			} else if(part3 == true) {
				score[2][3]++;
				$('#scoreD span').html(score[2][3]);
			};
		};

		//press enter
		if(e.which == 13) {
			if(stage == 0 ) {
				ChangeState("test", start, false);
			}

			if(stage == 1) {
				ChangeState("uitleg hierzo opgeschreven", intro, false);
			}


			stage = stage + 1;
		}

		//press enter
		// if(e.which == 13) {
		// 	$('#start').hide();
		// 	$('#intro').show();
		// 	$('.a, .b, .c, .d').show();
		// 	$('#game').hide();
		// 	$('#eindscore').hide();
		// };

		//press space
		if(e.which == 32){
			part1 = true;
			$('#start').hide();
			$('#intro').hide();
			$('#game').show();
			$('#eindscore').hide();
			$('.a, .b, .c, .d').show();
		};

		//press 1
		if(e.which == 49) {
			part1 = false;
			$('#start').hide();
			
			$('.top_text, .bottom_text').html("Tel nu alle berichten die niet van je vrienden afkomstig zijn.");
			$('#intro').show();
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
			$('.background').hide();
			$('#game').show();
			$('#eindscore').hide();
			$('span').html(0);
			$('.a, .b, .c, .d').show();
			
		};

		//press 4
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

function ChangeState(text, slide, start, score) {
	$('.top_text, .bottom_text').html(text);

	$('.wrapper').hide();

	slide.show();

	if(start == true) {
		$('.start').show();
	} else {
		$('.start').hide();
	};

	if(score == true) {
		$('.score').show();
	} else {
		$('.score').hide();
	};
};