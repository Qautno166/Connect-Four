const grid = document.querySelectorAll(".grid div");
let currentPlayer = document.querySelector(".current-player");
const result = document.querySelector("#result");
let currPlayer = 1;
let currScore1 = 1;
let currScore2 = 1;
console.log(grid);
for (let i = 0; i < grid.length; i++) {
  grid[i].onclick = function () {
    if (
      (grid[i + 7].classList.contains("takken") &&
        grid[i].classList.contains("player-two")) ||
      grid[i].classList.contains("player-one")
    ) {
      alert("cant go here");
    } else {
      if (currPlayer == 1 && grid[i + 7].classList.contains("takken")) {
        grid[i].classList.add("takken");
        grid[i].classList.add("player-one");
        currPlayer = 2;
        currentPlayer.innerHTML = currPlayer;
        checkWinner();
      } else if (currPlayer == 2 && grid[i + 7].classList.contains("takken")) {
        grid[i].classList.add("takken");
        grid[i].classList.add("player-two");
        currPlayer = 1;
        currentPlayer.innerHTML = currPlayer;
        checkWinner();
      }
    }
    // alert("cant go here");

    //Counting score
    function checkWinner() {
      // Check horizontally
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
          if (
            grid[row * 7 + col].classList.contains("player-one") &&
            grid[row * 7 + col + 1].classList.contains("player-one") &&
            grid[row * 7 + col + 2].classList.contains("player-one") &&
            grid[row * 7 + col + 3].classList.contains("player-one")
          ) {
            result.innerHTML = "PLAYER ONE WIN";
          }
          if (
            grid[row * 7 + col].classList.contains("player-two") &&
            grid[row * 7 + col + 1].classList.contains("player-two") &&
            grid[row * 7 + col + 2].classList.contains("player-two") &&
            grid[row * 7 + col + 3].classList.contains("player-two")
          ) {
            result.innerHTML = "PLAYER TWO WIN";
          }
        }
      }
      // Check Verticaly
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
          if (
            grid[row * 7 + col].classList.contains("player-one") &&
            grid[(row + 1) * 7 + col].classList.contains("player-one") &&
            grid[(row + 2) * 7 + col].classList.contains("player-one") &&
            grid[(row + 3) * 7 + col].classList.contains("player-one")
          ) {
            result.innerHTML = "PLAYER ONE WIN";
          }
          if (
            grid[row * 7 + col].classList.contains("player-two") &&
            grid[(row + 1) * 7 + col].classList.contains("player-two") &&
            grid[(row + 2) * 7 + col].classList.contains("player-two") &&
            grid[(row + 3) * 7 + col].classList.contains("player-two")
          ) {
            result.innerHTML = "PLAYER TWO WIN";
          }
        }
      }
      //Check diagonaly
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
          if (
            grid[row * 7 + col].classList.contains("player-one") &&
            grid[(row + 1) * 7 + col - 1].classList.contains("player-one") &&
            grid[(row + 2) * 7 + col - 2].classList.contains("player-one") &&
            grid[(row + 3) * 7 + col - 3].classList.contains("player-one")
          ) {
            result.innerHTML = "PLAYER ONE WIN";
          }
          if (
            grid[row * 7 + col].classList.contains("player-two") &&
            grid[(row + 1) * 7 + col - 1].classList.contains("player-two") &&
            grid[(row + 2) * 7 + col - 2].classList.contains("player-two") &&
            grid[(row + 3) * 7 + col - 3].classList.contains("player-two")
          ) {
            result.innerHTML = "PLAYER TWO WIN";
          }
        }
      }
      for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 5; row++) {
          if (
            grid[row * 7 + col].classList.contains("player-one") &&
            grid[(row + 1) * 7 + col + 1].classList.contains("player-one") &&
            grid[(row + 2) * 7 + col + 2].classList.contains("player-one") &&
            grid[(row + 3) * 7 + col + 3].classList.contains("player-one")
          ) {
            result.innerHTML = "PLAYER ONE WIN";
          }
          if (
            grid[row * 7 + col].classList.contains("player-two") &&
            grid[(row + 1) * 7 + col + 1].classList.contains("player-two") &&
            grid[(row + 2) * 7 + col + 2].classList.contains("player-two") &&
            grid[(row + 3) * 7 + col + 3].classList.contains("player-two")
          ) {
            result.innerHTML = "PLAYER TWO WIN";
          }
        }
      }
    }
  };
}
// function counting() {
//   if (grid[i].classList.contains("player-one")) {
//     //Check Horizontaly
//     if (
//       grid[i].classList.contains("player-one") &&
//       grid[i + 1].classList.contains("player-one") &&
//       grid[i + 2].classList.contains("player-one") &&
//       grid[i + 3].classList.contains("player-one")
//     ) {
//       currScore1 += 1;
//       console.log("No1 is winner");
//     }
//   }
//   if (grid[i].classList.contains("player-two")) {
//     if (
//       grid[i + 7].classList.contains("player-two") ||
//       grid[i + 1].classList.contains("player-two") ||
//       grid[i - 1].classList.contains("player-two")
//     ) {
//       currScore2 += 1;
//       console.log("No2", currScore2);
//     }
//   }
// }
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
// console.log(grid[i]);

//Counting score
// function counting() {
//   if (grid[i + 7].classList.contains("player-one")) {
//     currScore1 += 1;
//     console.log(currScore1);
//   }
// }

// function winner() {}

// //checking horizontaly

// if()
