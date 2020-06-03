document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!


  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      move("left");
    }
    if (e.key === "ArrowRight") {
        move("right");
      }
      if (e.key === "ArrowUp") {
        move("up");
      }
      if (e.key === "ArrowDown") {
        move("down");
      }
  });



})
