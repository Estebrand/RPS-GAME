

	$('#rock').click(function(){
	 		userChoice = `Rock`
	 		// $(this).toggle('slow', function(){
	 		// 		(this).css(width , 200px)
	 		// 	};

	 		game(`Rock`)
	});

	$('#paper').click(function(){
		 userChoice = `Paper`

		 game(`Paper`)
	});


	$(`#scissors`).click(function(){
		 userChoice = `Scissors`;

		game(`Scissors`)
	});



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
						winner = (`You win.`);
				}else {
						winner = (`Computer wins`);
		};	
	 } else if  (userChoice == `Paper`){	 	
	 			if (computerChoice == `Rock`){
						winner = (`You win.`);
		 	} else {
		 				winner = (`Computer wins`);
		 	};
	
	 } else if (userChoice == `Scissors`){
	 			if (computerChoice == 'Paper'){
	 				winner = (`You win`);
	 			} else {
	 				winner = (`Computer wins`);
	 			};
 		};	  

}

$('.image').click(function(){
	$('#answer').html(`${winner}`);
});

