<script type="text/javascript">
// Create an array that lists out all of the options
var options = ['a','b','c', 'd','e','f', 'g','h','i', 'j','k','l', 'm','n','o', 'p','q','r', 's','t','u', 'v','w','x', 'y','z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;



// Captures Key Clicks
document.onkeyup = function(event) {

	// Determines which exact key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Alerts with user guess
	alert(userGuess);

	// Create code to randomly choose one of the three options (Computer) 
	var computerGuess = options[Math.floor(Math.random()*options.length)];

	// Alerts with Computer guess
	alert(computerGuess);
	
	if (userGuess == computerGuess ){
		alert("User wins!");
		wins++;
	}

	else if (userGuess != computerGuess){
		alert("Try Again!");
		guessesLeft--;
		losses++;
	}

	
	var output = document.getElementById("game");

	var keyPress = userGuess;

	var winsCount = "<p>" + "Wins: " + wins + "</p>" + "<p>" + "Losses: " + losses + "</p>" + "<p>" + "Guesses Left: " + guessesLeft + "</p>" + "<p>" + "Letters already chosen: " + keyPress + "</p>";

	

	output.innerHTML = winsCount;
}
</script>