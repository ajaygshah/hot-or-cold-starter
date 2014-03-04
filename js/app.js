
$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var count = 0;
  	$("#userGuess").focus();
 
  		
 //generate a random number
  function new_num () {
  	var num = Math.floor(Math.random()*100);
  	return num;
  }
  //......................
  	var comp_num = new_num();
  	alert(comp_num);
  	click_behavior();

  //To reset the game on new game click
	function new_game () {
		$("#count").text("0");
		$("#guessList li").remove();
		var comp_num = new_num();
		alert(comp_num);
	}  

	$(".new").click(function() {
			new_game();
	});
  //....................................

//behavior of game once user enters a guess and clicks
function click_behavior () {

  	$("#guessButton").click(function() {
  	
  		var guess = +$("#userGuess").val();

  			if(guess=="") {
  				alert("please enter a number between 1 and 100.");
  				$("#userGuess").val("").focus();
  				return false;
  			}
        else if(guess>100 || guess<1){
            alert("please enter a number between 1 and 100.");
          $("#userGuess").val("").focus();
          return false;
        }

  			else if(isNaN(guess)) {
  				alert("no alpha characters. only numbers.");
  				$("#userGuess").val("").focus();
  				return false;
  			}

  			else {
  				count += 1;
  				$("#count").text(count);
  				$("#guessList").append("<li>" + guess + " " + "</li>");
  				$("#userGuess").val("").focus();

  				return false;
  			}


  	})
  }
//..............................................

});


