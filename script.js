let currentscore1 = Number(0);
let player1score = Number(0);
let player2score = Number(0);
let cons = "player1";

document.querySelector(".control2").addEventListener("click", function () {
  if (cons === "player1") {
    let rn = Math.floor(Math.random() * 6) + 1;
    let png = "dice" + rn + ".png";
    document.querySelector(".dice").setAttribute("src", png);
    currentscore1 += rn;
    if (rn !== 1) {
      document.querySelector(".currentscore1").innerHTML = currentscore1;
    } else {
      document.querySelector(".currentscore1").innerHTML = 0;
      currentscore1 = 0;
      cons = "player2";
      document.querySelector(".pl1").classList.remove("hidden");
      document.querySelector(".pl2").classList.add("hidden");
    }
  } else {
    let rn = Math.floor(Math.random() * 6) + 1;
    let png = "dice" + rn + ".png";
    document.querySelector(".dice").setAttribute("src", png);
    currentscore1 += rn;
    if (rn !== 1) {
      document.querySelector(".currentscore2").innerHTML = currentscore1;
    } else {
      document.querySelector(".currentscore2").innerHTML = 0;
      currentscore1 = 0;
      cons = "player1";
      document.querySelector(".pl2").classList.remove("hidden");
      document.querySelector(".pl1").classList.add("hidden");
    }
  }
});

document.querySelector(".control3").addEventListener("click", function () {
  if (cons === "player1") {
    player1score += currentscore1;
    document.querySelector(".score1").innerHTML = player1score;
    currentscore1 = 0;
    document.querySelector(".currentscore1").innerHTML = 0;
    if (player1score >= 100) {
      document.querySelector(".alert4").classList.add("alert4hid");
      document.querySelector(".win").innerHTML = "Player 1 wins🏆";
    }
    cons = "player2";
    document.querySelector(".pl1").classList.remove("hidden");
    document.querySelector(".pl2").classList.add("hidden");
  } else {
    player2score += currentscore1;
    document.querySelector(".score2").innerHTML = player2score;
    currentscore1 = 0;
    document.querySelector(".currentscore2").innerHTML = 0;
    if (player2score >= 100) {
      document.querySelector(".alert4").classList.add("alert4hid");
      document.querySelector(".win").innerHTML = "Player 2 wins🏆";
    }
    cons = "player1";
    document.querySelector(".pl2").classList.remove("hidden");
    document.querySelector(".pl1").classList.add("hidden");
  }
});

// new game
document.querySelector(".control1").addEventListener("click", function () {
  document.querySelector(".currentscore1").innerHTML = 0;
  document.querySelector(".score1").innerHTML = 0;
  document.querySelector(".dice").setAttribute("src", "dice6.png");
  currentscore1 = 0;
  player1score = 0;
  player2score = 0;
  document.querySelector(".currentscore2").innerHTML = 0;
  document.querySelector(".score2").innerHTML = 0;
  document.querySelector(".dice").setAttribute("src", "dice6.png");
  cons = "player1";
  document.querySelector(".pl1").classList.remove("hidden");
  document.querySelector(".pl2").classList.remove("hidden");
});
document.querySelectorAll(".desbtn")[0].addEventListener("click", function () {
  document.querySelector(".alert1").classList.add("alerthidden");
});
document.querySelectorAll(".desbtn")[1].addEventListener("click", function () {
  document.querySelector(".alert2").classList.add("alerthidden");
});
document.querySelectorAll(".desbtn")[2].addEventListener("click", function () {
  document.querySelector(".alert3").classList.add("alerthidden");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".alert1").classList.remove("alerthidden");
});
document.querySelector(".close1").addEventListener("click", function () {
  document.querySelector(".alert2").classList.remove("alerthidden");
});
document.querySelector(".close2").addEventListener("click", function () {
  document.querySelector(".alert3").classList.remove("alerthidden");
});
// close button on winning
document.querySelector(".close3").addEventListener("click", function () {
  document.querySelector(".currentscore1").innerHTML = 0;
  document.querySelector(".score1").innerHTML = 0;
  document.querySelector(".dice").setAttribute("src", "dice6.png");
  currentscore1 = 0;
  player1score = 0;
  player2score = 0;
  document.querySelector(".currentscore2").innerHTML = 0;
  document.querySelector(".score2").innerHTML = 0;
  document.querySelector(".dice").setAttribute("src", "dice6.png");
  cons = "player1";
  document.querySelector(".pl1").classList.remove("hidden");
  document.querySelector(".pl2").classList.remove("hidden");
  document.querySelector(".alert4").classList.remove("alert4hid");
});
