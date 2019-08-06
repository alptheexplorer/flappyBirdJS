// loader for global variables
$.getScript("assets.js", function() {
   console.log("Script loaded but not necessarily executed.");
});

// button behaviour --> creates canvas once then quits 
var canvasExists = false;

button.addEventListener("click",gameLoader);

function gameLoader(){
  remover();
  var canvas = document.createElement("canvas");
  gameContainer.appendChild(canvas);
  canvas.setAttribute("id","canvas");
  console.log(canvas.id);

}

$(button).click(function(){
  canvasExists = true;
});

function remover(){
  if(canvasExists = true){
    button.removeEventListener("click",gameLoader);
    gameContainer.removeChild(button);
  }
}
