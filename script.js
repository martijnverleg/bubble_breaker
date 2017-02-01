$(document).ready(function() {
	var scoreA = 0;
	var scoreB = 0;
	var scoreC = 0;
	var scoreD = 0;

	$('#start').show();
	$('#intro').hide();
	$('#game').hide();


	$(document).keypress(function(e) {
	  if(e.which == 65) {
	    console.log("A");
	    scoreA++;
	    $('#scoreA').html(scoreA);
	  }

	  if(e.which == 66) {
	    console.log("B");
	    scoreB += 1;
	    $('#scoreB').html(scoreB);
	  }

	  if(e.which == 67) {
	    console.log("C");
	    scoreC += 1;
	    $('#scoreC').html(scoreC);
	  }

	  if(e.which == 68) {
	    console.log("D");
	    scoreD += 1;
	    $('#scoreD').html(scoreD);
	  }

	  if(e.which == 13) {
	  	$('#start').hide();
	  	$('#intro').show();
		$('#game').hide();
	  }

	  if(e.which == 32){
	  	$('#start').hide();
	  	$('#intro').hide();
		$('#game').show();
	  }
	});
})