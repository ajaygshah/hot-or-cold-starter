
$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//Generate a random number for a new game
  	var num = Math.floor(Math.random()*100);
  	alert(num);
  	var count=0;
  	var guess;
  	$("#userGuess").focus();
  	$("#guessButton").click(function() {
  		if($("#userGuess").val() == "" || $.trim($("#userGuess"))=="") {
  			alert("Please guess.");	
  		}
  		else {
  		count += 1;
  		$("#count").text(count);
  		guess = $("#userGuess").val();
  		$("#guessList").append(guess + " ");
  		$("#userGuess").focus();
  		$("#userGuess").val("");

  		return false;

  		}

  	})

});


