// stage function inputs
	var stage = [
		// text, slide, show press start, show score
		["Start screen", "start", true, false],
		["Intro screen", "intro", false, false],
		["Game screen", "game", false, true],
		["End screen", "end", false, true]
	];

	// set first stage
	var currentStage = 0;

	var score = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];

	var buttons = [
		[65, 66, 67, 68],
		['a', 'b', 'c', 'd'],
		['scoreA', 'scoreB', 'scoreC', 'scoreD']
	];


$(document).ready(function() {

	$(document).keypress(function(e) {
		//score 
		// event, stage, keyCode, button, span, iteration
		ButtonPress(e, currentStage, buttons[0][0], buttons[1][0], buttons[2][0], 0);
		ButtonPress(e, currentStage, buttons[0][1], buttons[1][1], buttons[2][1], 1);
		ButtonPress(e, currentStage, buttons[0][2], buttons[1][2], buttons[2][2], 2);
		ButtonPress(e, currentStage, buttons[0][3], buttons[1][3], buttons[2][3], 3);


		//press enter
		if(e.which == 13) {	
			ChangeState(stage[currentStage][0], stage[currentStage][1], stage[currentStage][2], stage[currentStage][3]);
			stage = stage + 1;
		}

		//press 4
		if(e.which == 48) {
			part3 = false;
			$('#start').hide();
			$('#intro').hide();
			$('#game').hide();
			$('#eindscore').show();
			eindscoreA = (scoreA1 - scoreA2) / scoreA3;
			eindscoreB = (scoreB1 - scoreB2) / scoreB3;
			eindscoreC = (scoreC1 - scoreC2) / scoreC3;
			eindscoreD = (scoreD1 - scoreD2) / scoreD3;
		}
	});
});

function ChangeState(text, slide, start, score) {
	$('.top_text, .bottom_text').html(text);

	$('.wrapper').not('#' + slide).hide();

	$('#' + slide).show();

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

function ButtonPress(e, stage, keyCode, button, spanID, iteration) {
	if(e.which == keyCode) {
		if(stage == 0) {
			$('.' + button).stop().hide();
		} else {
			score[stage][iteration]++;
			$('#' + spanID + 'span').html(score[stage][iteration]);
		};
	};
}