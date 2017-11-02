

	$('#rock').click(function(){
	 		userChoice = `Rock`;
	 		game(`Rock`)	 		
	});
	
	$(`#rock`).hover(function(){
	 		$(`#rock`).toggleClass(`toggleOn`);

	 	});

	$('#paper').click(function(){
		 userChoice = `Paper`;

		 game(`Paper`)
	});
	$(`#paper`).hover(function(){
	 		$(`#paper`).toggleClass(`toggleOn`);

	 	});
	$(`#scissors`).click(function(){
		 userChoice = `Scissors`;

		game(`Scissors`)
	});
	$(`#scissors`).hover(function(){
	 		$(`#scissors`).toggleClass(`toggleOn`);
	 	});


var compScore = 0;
var userScore = 0;

function game(userChoice){

		computerChoice = Math.random()

			if (computerChoice  <= 0.33){
		computerChoice = `Rock`;
	 } else if (computerChoice <= 0.66){
		computerChoice = `Scissors`;
	 } else {
		computerChoice = `Paper`;
	};



if (userChoice == computerChoice){
				winner = (`It's a tie.`);
		} else if  (userChoice ==`Rock`) {
		  	if (computerChoice == `Scissors`){
						winner = (`You win!`); userScore = userScore+1
				}else {
						winner = (`Computer wins.`); compScore = compScore+1
		};	
	 } else if  (userChoice == `Paper`){	 	
	 			if (computerChoice == `Rock`){
						winner = (`You win!`);  userScore = userScore+1
		 	} else {
		 				winner = (`Computer wins.`); compScore = compScore+1
		 	};
	
	 } else if (userChoice == `Scissors`){
	 			if (computerChoice == 'Paper'){
	 				winner = (`You win!`);  userScore = userScore+1
	 			} else {
	 				winner = (`Computer wins.`); compScore = compScore+1
	 			};
 		};	  

}

$('.image').click(function(){
	$('#answer').html(`${winner}`);
});

$('.image').click(function(){
	$('#compScore').html(`${compScore}`);
});

$('.image').click(function(){
	$('#userScore').html(`${userScore}`);
});


