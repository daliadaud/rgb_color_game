var squares = document.querySelectorAll(".square")
var mode = squares.length
var colors = generateRandomColors(mode)
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetGame");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButton();
  setupSquares();
}

function setupModeButton(){
  modeButtons[1].classList.add("selected");
  for(var i = 0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      for(var i =0; i<modeButtons.length; i++)modeButtons[i].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? mode = 3: mode = 6;
      reset();
    });
  }
}

colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click", reset);

function changeColors(color){
  for(var i=0; i<colors.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  return colors[Math.floor(Math.random() * mode)]
}

function generateRandomColors(num){
  var l = []
  for(var i=0; i<num; i++)l.push(randomColor());
  //RGB 3, get random color and push into array
  return l
}

function randomColor(){
  return "rgb(" + Math.floor(Math.random() * 256) + ", "
  + Math.floor(Math.random() * 256) + ", "
  + Math.floor(Math.random() * 256) + ")";
}

function reset(){
  colors = generateRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    resetButton.textContent = "New Colors";
    if(i>=mode && i<squares.length)squares[i].style.display = "none";
}
}
function setupSquares(){
  for(var i=0; i<mode; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        message.textContent = "Correct!";
        resetButton.textContent = "Play Again"
        changeColors(pickedColor);
        h1.style.backgroundColor = clickedColor;
      }
      else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again"
      }
    });
  }
}
