$(document).ready(function(){
	var count = 0;
	var computer;
	var userChoice = prompt("Do you want to play with X or O?");
	var one = $(".one");
	var two = $(".two");
	var three = $(".three");
	var four = $(".four");
	var five = $(".five");
	var six = $(".six");
	var seven = $(".seven");
	var eight = $(".eight");
	var nine = $(".nine");
	var arrayPossibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	$("#moves").html(count);


	function decidesWinner(){
		if ((one.html() == "X" && two.html() == "X" && three.html() == "X") || (one.html() == "X" && five.html() == "X" && nine.html() == "X") || (one.html() == "X" && four.html() == "X" && seven.html() == "X") || (seven.html() == "X" && eight.html() == "X" && nine.html() == "X") || (four.html() == "X" && five.html() == "X" && six.html() == "X") || (two.html() == "X" && five.html() == "X" && eight.html() == "X") || (three.html() == "X" && six.html() == "X" && nine.html() == "X")){
			if (userChoice == "X"){
				alert("Você Ganhou!!!");
			}
			else{
				alert("Você Perdeu!!!");
			}
		}

		else if ((one.html() == "O" && two.html() == "O" && three.html() == "O") || (one.html() == "O" && five.html() == "O" && nine.html() == "O") || (one.html() == "O" && four.html() == "O" && seven.html() == "O") || (seven.html() == "O" && eight.html() == "O" && nine.html() == "O") || (four.html() == "O" && five.html() == "O" && six.html() == "O") || (two.html() == "O" && five.html() == "O" && eight.html() == "O") || (three.html() == "O" && six.html() == "O" && nine.html() == "O")){
			if (userChoice == "O"){
				alert("Você Ganhou!!!");
			}
			else{
				alert("Você Perdeu!!!");
			}
		}

		else if(count == 5){
			alert("Empate");
		}
	}

	if (userChoice == "X" || userChoice == "x"){
		userChoice = "X";
		computer = "O";
	}

	else if(userChoice == "O" || userChoice == "o"){
		userChoice = "O";
		computer = "X";
	}

	$("#resetButton").click(function(){
		count = 0;
		$("#moves").html(count);
		one.html("&nbsp;");
		two.html("&nbsp;");
		three.html("&nbsp;");
		four.html("&nbsp;");
		five.html("&nbsp;");
		six.html("&nbsp;");
		seven.html("&nbsp;");
		eight.html("&nbsp;");
		nine.html("&nbsp;");
		arrayPossibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	});

	one.click(function(){
		var numero = 1;
		one.html(userChoice);
		count++;
		$("#moves").html(count);
		arrayPossibilities.splice(arrayPossibilities.indexOf(numero),1);
		var x = Math.floor(Math.random() * (arrayPossibilities.length - 0) + 0);
		console.log(x, arrayPossibilities[x]);
		if (arrayPossibilities[x] == 2){
			two.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(2),1);
		}

		else if (arrayPossibilities[x] == 3){
			three.html(computer);	
			arrayPossibilities.splice(arrayPossibilities.indexOf(3),1);
		}

		else if (arrayPossibilities[x] == 4){
			four.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(4),1);
		}

		else if (arrayPossibilities[x] == 5){
			five.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(5),1);
		}

		else if (arrayPossibilities[x] == 6){
			six.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(6),1);
		}

		else if (arrayPossibilities[x] == 7){
			seven.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(7),1);
		}

		else if (arrayPossibilities[x] == 8){
			eight.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(8),1);
		}

		else if (arrayPossibilities[x] == 9){
			nine.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(9),1);
		}

		decidesWinner();
	});

	two.click(function(){
		var numero = 2;
		two.html(userChoice);
		count++;
		$("#moves").html(count);

		arrayPossibilities.splice(arrayPossibilities.indexOf(numero),1);
		var x = Math.floor(Math.random() * (arrayPossibilities.length - 0) + 0);
		console.log(x, arrayPossibilities[x]);
		if (arrayPossibilities[x] == 1){
			one.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(1),1);
		}

		else if (arrayPossibilities[x] == 3){
			three.html(computer);	
			arrayPossibilities.splice(arrayPossibilities.indexOf(3),1);
		}

		else if (arrayPossibilities[x] == 4){
			four.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(4),1);
		}

		else if (arrayPossibilities[x] == 5){
			five.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(5),1);
		}

		else if (arrayPossibilities[x] == 6){
			six.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(6),1);
		}

		else if (arrayPossibilities[x] == 7){
			seven.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(7),1);
		}

		else if (arrayPossibilities[x] == 8){
			eight.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(8),1);
		}

		else if (arrayPossibilities[x] == 9){
			nine.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(9),1);
		}

		decidesWinner();
	});

	three.click(function(){
		var numero = 3;
		three.html(userChoice);
		count++;
		$("#moves").html(count);

		arrayPossibilities.splice(arrayPossibilities.indexOf(numero),1);
		var x = Math.floor(Math.random() * (arrayPossibilities.length - 0) + 0);
		console.log(x, arrayPossibilities[x]);
		if (arrayPossibilities[x] == 2){
			two.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(2),1);
		}

		else if (arrayPossibilities[x] == 1){
			one.html(computer);	
			arrayPossibilities.splice(arrayPossibilities.indexOf(1),1);
		}

		else if (arrayPossibilities[x] == 4){
			four.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(4),1);
		}

		else if (arrayPossibilities[x] == 5){
			five.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(5),1);
		}

		else if (arrayPossibilities[x] == 6){
			six.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(6),1);
		}

		else if (arrayPossibilities[x] == 7){
			seven.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(7),1);
		}

		else if (arrayPossibilities[x] == 8){
			eight.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(8),1);
		}

		else if (arrayPossibilities[x] == 9){
			nine.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(9),1);
		}

		decidesWinner();
	});

	four.click(function(){
		var numero = 4;
		four.html(userChoice);
		count++;
		$("#moves").html(count);

		arrayPossibilities.splice(arrayPossibilities.indexOf(numero),1);
		var x = Math.floor(Math.random() * (arrayPossibilities.length - 0) + 0);
		console.log(x, arrayPossibilities[x]);
		if (arrayPossibilities[x] == 2){
			two.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(2),1);
		}

		else if (arrayPossibilities[x] == 3){
			three.html(computer);	
			arrayPossibilities.splice(arrayPossibilities.indexOf(3),1);
		}

		else if (arrayPossibilities[x] == 1){
			one.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(1),1);
		}

		else if (arrayPossibilities[x] == 5){
			five.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(5),1);
		}

		else if (arrayPossibilities[x] == 6){
			six.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(6),1);
		}

		else if (arrayPossibilities[x] == 7){
			seven.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(7),1);
		}

		else if (arrayPossibilities[x] == 8){
			eight.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(8),1);
		}

		else if (arrayPossibilities[x] == 9){
			nine.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(9),1);
		}

		decidesWinner();

	});

	five.click(function(){
		var numero = 5;
		five.html(userChoice);
		count++;
		$("#moves").html(count);

		arrayPossibilities.splice(arrayPossibilities.indexOf(numero),1);
		var x = Math.floor(Math.random() * (arrayPossibilities.length - 0) + 0);
		console.log(x, arrayPossibilities[x]);
		if (arrayPossibilities[x] == 2){
			two.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(2),1);
		}

		else if (arrayPossibilities[x] == 3){
			three.html(computer);	
			arrayPossibilities.splice(arrayPossibilities.indexOf(3),1);
		}

		else if (arrayPossibilities[x] == 4){
			four.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(4),1);
		}

		else if (arrayPossibilities[x] == 1){
			one.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(1),1);
		}

		else if (arrayPossibilities[x] == 6){
			six.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(6),1);
		}

		else if (arrayPossibilities[x] == 7){
			seven.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(7),1);
		}

		else if (arrayPossibilities[x] == 8){
			eight.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(8),1);
		}

		else if (arrayPossibilities[x] == 9){
			nine.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(9),1);
		}

		decidesWinner();
	});

	six.click(function(){
		var numero = 6;
		six.html(userChoice);
		count++;
		$("#moves").html(count);

		arrayPossibilities.splice(arrayPossibilities.indexOf(numero),1);
		var x = Math.floor(Math.random() * (arrayPossibilities.length - 0) + 0);
		console.log(x, arrayPossibilities[x]);
		if (arrayPossibilities[x] == 2){
			two.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(2),1);
		}

		else if (arrayPossibilities[x] == 3){
			three.html(computer);	
			arrayPossibilities.splice(arrayPossibilities.indexOf(3),1);
		}

		else if (arrayPossibilities[x] == 4){
			four.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(4),1);
		}

		else if (arrayPossibilities[x] == 5){
			five.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(5),1);
		}

		else if (arrayPossibilities[x] == 1){
			one.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(1),1);
		}

		else if (arrayPossibilities[x] == 7){
			seven.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(7),1);
		}

		else if (arrayPossibilities[x] == 8){
			eight.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(8),1);
		}

		else if (arrayPossibilities[x] == 9){
			nine.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(9),1);
		}

		decidesWinner();
	});

	seven.click(function(){
		var numero = 7;
		seven.html(userChoice);
		count++;
		$("#moves").html(count);

		arrayPossibilities.splice(arrayPossibilities.indexOf(numero),1);
		var x = Math.floor(Math.random() * (arrayPossibilities.length - 0) + 0);
		console.log(x, arrayPossibilities[x]);
		if (arrayPossibilities[x] == 2){
			two.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(2),1);
		}

		else if (arrayPossibilities[x] == 3){
			three.html(computer);	
			arrayPossibilities.splice(arrayPossibilities.indexOf(3),1);
		}

		else if (arrayPossibilities[x] == 4){
			four.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(4),1);
		}

		else if (arrayPossibilities[x] == 5){
			five.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(5),1);
		}

		else if (arrayPossibilities[x] == 6){
			six.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(6),1);
		}

		else if (arrayPossibilities[x] == 1){
			one.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(1),1);
		}

		else if (arrayPossibilities[x] == 8){
			eight.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(8),1);
		}

		else if (arrayPossibilities[x] == 9){
			nine.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(9),1);
		}

		decidesWinner();
	});	

	eight.click(function(){
		var numero = 8;
		eight.html(userChoice);
		count++;
		$("#moves").html(count);

		arrayPossibilities.splice(arrayPossibilities.indexOf(numero),1);
		var x = Math.floor(Math.random() * (arrayPossibilities.length - 0) + 0);
		console.log(x, arrayPossibilities[x]);
		if (arrayPossibilities[x] == 2){
			two.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(2),1);
		}

		else if (arrayPossibilities[x] == 3){
			three.html(computer);	
			arrayPossibilities.splice(arrayPossibilities.indexOf(3),1);
		}

		else if (arrayPossibilities[x] == 4){
			four.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(4),1);
		}

		else if (arrayPossibilities[x] == 5){
			five.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(5),1);
		}

		else if (arrayPossibilities[x] == 6){
			six.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(6),1);
		}

		else if (arrayPossibilities[x] == 7){
			seven.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(7),1);
		}

		else if (arrayPossibilities[x] == 1){
			one.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(1),1);
		}

		else if (arrayPossibilities[x] == 9){
			nine.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(9),1);
		}

		decidesWinner();
	});

	nine.click(function(){
		var numero = 9;
		nine.html(userChoice);
		count++;
		$("#moves").html(count);

		arrayPossibilities.splice(arrayPossibilities.indexOf(numero),1);
		var x = Math.floor(Math.random() * (arrayPossibilities.length - 0) + 0);
		console.log(x, arrayPossibilities[x]);
		if (arrayPossibilities[x] == 2){
			two.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(2),1);
		}

		else if (arrayPossibilities[x] == 3){
			three.html(computer);	
			arrayPossibilities.splice(arrayPossibilities.indexOf(3),1);
		}

		else if (arrayPossibilities[x] == 4){
			four.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(4),1);
		}

		else if (arrayPossibilities[x] == 5){
			five.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(5),1);
		}

		else if (arrayPossibilities[x] == 6){
			six.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(6),1);
		}

		else if (arrayPossibilities[x] == 7){
			seven.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(7),1);
		}

		else if (arrayPossibilities[x] == 8){
			eight.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(8),1);
		}

		else if (arrayPossibilities[x] == 1){
			one.html(computer);
			arrayPossibilities.splice(arrayPossibilities.indexOf(1),1);
		}

		decidesWinner();
	});

	

});