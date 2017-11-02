console.log("JS Rock Paper Scissors");

	
	var winner = "";
	var userChoice = "";
	// userChoice = prompt(`let's play rock paper scissors`)

// Create Computer Choice 

	var computerChoice = Math.random();

	if (computerChoice  <= 0.33){
		computerChoice = `Rock`;
	 } else if (computerChoice <= 0.66){
		computerChoice = `Scissors`;
	 } else {
		computerChoice = `Paper`;
	};

// // Change User Choice
	// function divFunction1(){
	//  	userChoice = `Rock`
	// };

	// $('#paper').click(function(){
	// 	 userChoice = `Paper`
	// });

	// $(`#scissors`).click(function(){
	// 	 userChoice = `Scissors`
	// });



 	console.log(userChoice);
// Select Winner

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

// //Display Winner
// $('.container').click(function(){
// 	$('#answer').html(`${winner}`);
// });

$('.image').click(function(){
	$('#answer').html(`${winner}`);
});

// var again = prompt(`Would you like to play again?`)

console.log(`${winner}`)
console.log(`${userChoice}`);
console.log(`${computerChoice}`);
