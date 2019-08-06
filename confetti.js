$.getScript("assets.js", function() {
   console.log("Script loaded but not necessarily executed.");
});


var bird = new Image(5,2);
bird.src = "./images/bird.png";
var ctx = viewport.getContext("2d");

// goal is to add velocity to bird objects after click

button.addEventListener("click",confetti);

function confetti(){
  ctx.drawImage(bird,0,0);
  console.log(bird.width);
}


/*
1. create bird instances inside canvas(multiple)
2. add velocity to Bird
3. after passing certain distance, destroy all birds


*/
