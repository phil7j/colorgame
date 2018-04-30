// var colors = ["rgb(255, 0, 0)", 
// 				"rgb(255, 255, 0)", 
// 				"rgb(0, 255, 0)", 
// 				"rgb(0, 255, 255)", 
// 				"rgb(0, 0, 255)", 
// 				"rgb(255, 0, 255)",]

var numSquares = 6;
var colors = generateRandomColors(numSquares)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//EASY AND HARD BUTTON FUNCTIONALITY
//EASY
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
			else {
				squares[i].style.display = "none";
			}
		}
	
});

//HARD
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
				squares[i].style.display = "block";
			
		}
});


//RESET BUTTON
resetButton.addEventListener("click", function(){
//generate all new colors
messageDisplay.textContent = "";
colors = generateRandomColors(numSquares);
//pick new random color from array
pickedColor = pickColor();
//change color display
colorDisplay.textContent = pickedColor;
//change color of squares
for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	this.textContent = "New Colors";
})


//Picked Color display in Title
colorDisplay.textContent = pickedColor;


//Main Logic and Functionality
for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
	var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
			resetButton.textContent = "New Colors";
		}
		
	})
}


//FUNCTIONS

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
squares[i].style.backgroundColor = color;
}
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr[i] = randomColor();
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 -255
	var red = Math.floor(Math.random() * 256)
	//pick a "green" from 0 -255
	var green = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 -255
	var blue = Math.floor(Math.random() * 256)
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}