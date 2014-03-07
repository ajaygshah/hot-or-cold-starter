$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var count = 0; //to start a variable to record the number of tries
    var comp_num = new_num();  //store the random number
  	$("#userGuess").focus(); //focus the cursor in the input box
    click_behavior(); //now the game begins and acts as per the user input

  		

 //generate a random number
  function new_num () {
  	var num = (Math.floor(Math.random()*100))+1;
  	return num;
  }
  //......................

  
  //To reset the game on new game click
	function new_game () {
    count = 0;
		$("#count").text("0");
		$("#guessList li").remove();
    $("#feedback").text("Make your Guess!");
		var comp_num = new_num();
    $("#userGuess").focus();
    return false;
	}  

	$(".new").click(function() {
			new_game();
	});
  //....................................

//behavior of game once user enters a guess and clicks
function click_behavior () {

  	$("#guessButton").click(function() {
  	
  		var guess = +$("#userGuess").val();

  			if($("#userGuess").val()==="") {
  				alert("please enter a number between 1 and 100.");
  				$("#userGuess").val("").focus();
  				return false;
  			}

        else if(guess == 0) {
          alert("oh come on!! not zero..u can do better");
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

          if(guess < comp_num) {
             if($("#guessList").has("li").length==0) {
                $("#guessList").append("<li>" + guess +  "</li>");
                $("#feedback").text("It is cold!");
             }
            if(guess > +$(document).find("li").last().html()) {
              $("#guessList").append("<li>" + guess +  "</li>");
              $("#feedback").text("Warming up!");
            }
             if(guess < +$(document).find("li").last().html()) {
              $("#guessList").append("<li>" + guess +  "</li>");
              $("#feedback").text("Raise the temperature NOW!");
            }
          }

          if(guess > comp_num) {
             if($("#guessList").has("li").length==0) {
                $("#guessList").append("<li>" + guess +  "</li>");
                $("#feedback").text("It is hot, red hot!");
             }
              if(guess < +$(document).find("li").last().html()) {
              $("#guessList").append("<li>" + guess +  "</li>");
              $("#feedback").text("Getting closer by cooling off.");
            }
               if(guess > +$(document).find("li").last().html()) {
              $("#guessList").append("<li>" + guess +  "</li>");
              $("#feedback").text("Wrong direction, my friend!");
            }
          }

          if(guess == comp_num) {
              $("#guessList").append("<li>" + guess +  "</li>");            
              $("#feedback").text("You got it! Start a new game.");
          }

  				$("#userGuess").val("").focus();
         
  				return false;
  			}


  	})
  }
//..............................................

});
