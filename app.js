const grid = document.querySelectorAll(".grid div");
let currentPlayer = document.querySelector(".current-player");
let currPlayer = 1;
console.log(grid);
for (let i = 0; i < grid.length; i++) {
  grid[i].onclick = function () {
    if (
      grid[i + 7].classList.contains("takken")
      // grid[i].classList.contains("")
    ) {
      if (currPlayer == 1) {
        grid[i].classList.add("takken");
        grid[i].classList.add("player-one");
        currPlayer = 2;
        currentPlayer.innerHTML = currPlayer;
      } else if (currPlayer == 2) {
        grid[i].classList.add("takken");
        grid[i].classList.add("player-two");
        currPlayer = 1;
        currentPlayer.innerHTML = currPlayer;
      }
    }

    // if (currPlayer === 1 && grid[i].classList.contains("takken")) {
    //   grid[i].classList.add("player-one");
    //   grid[i].classList.add("takken");
    //   currentPlayer.innerHTML = 1;
    //   currPlayer = 2;
    // } else if (currPlayer === 2 && grid[i].classList.contains("takken")) {
    //   currentPlayer.innerHTML = 2;
    //   currentPlayer.innerHTML = currPlayer;
    //   grid[i].classList.add("player-two");
    //   grid[i].classList.add("takken");
    //   currPlayer = 1;
    // }
    console.log(grid[i]);
  };
}
