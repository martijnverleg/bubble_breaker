// stage function inputs
var stage = [
	// text, slide, show press start, show score
	["Start screen", "start", true, false],
	["Intro screen", "intro", true, false],
	["Game screen", "game", false, true],
	["End screen", "end", false, true]
];

// set first stage
var currentStage = 0;

var score = [
	// A, B, C, D
	[0,0,0,0], // round 1
	[0,0,0,0], // round 2
	[0,0,0,0]  // round 3
];

var buttons = [
	[65, 66, 67, 68],
	['a', 'b', 'c', 'd'],
	['scoreA', 'scoreB', 'scoreC', 'scoreD']
];

$(document).ready(function() {
	// text, slide, show press start, show score
	ChangeState(stage[currentStage][0], stage[currentStage][1], stage[currentStage][2], stage[currentStage][3]);
	currentStage = currentStage + 1;

	$(document).keypress(function(e) {
		// A, B, C, D keys 
		// event, stage, keyCode, button, span, iteration
		ButtonPress(e, currentStage, buttons[0][0], buttons[1][0], buttons[2][0], 0);
		ButtonPress(e, currentStage, buttons[0][1], buttons[1][1], buttons[2][1], 1);
		ButtonPress(e, currentStage, buttons[0][2], buttons[1][2], buttons[2][2], 2);
		ButtonPress(e, currentStage, buttons[0][3], buttons[1][3], buttons[2][3], 3);

		//press enter
		if(e.which == 13) {	
			ChangeState(stage[currentStage][0], stage[currentStage][1], stage[currentStage][2], stage[currentStage][3]);
			currentStage = currentStage + 1;
		}

		//press 0
		if(e.which == 48) {
			part3 = false;
			$('#start').hide();
			$('#intro').hide();
			$('#game').hide();
			$('#eindscore').show();
			eindscoreA = (score[0][0] - score[1][0]) / score[2][0];
			eindscoreB = (score[0][1] - score[1][1]) / score[2][1];
			eindscoreC = (score[0][2] - score[1][2]) / score[2][2];
			eindscoreD = (score[0][3] - score[1][3]) / score[2][3];
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

function ButtonPress(event, stage, keyCode, button, spanID, iteration) {
	if(event.which == keyCode) {
		if(stage == 1 || stage == 2) {
			$('.' + button).hide();
			console.log("hide");
		} else {
			score[stage][iteration]++;
			$('#' + spanID + 'span').html(score[stage][iteration]);
		};
	};
}