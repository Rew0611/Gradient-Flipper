var colour = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let text = document.querySelector(".color");
let button = document.getElementById("click-btn");
button.addEventListener("click", function () {
  let rew = "#";
  for (let i = 0; i < 6; i++) {
    rew += colour[randomnumber()];
  }
  let rew2 = "#";
  for (let i = 0; i < 6; i++) {
    rew2 += colour[randomnumber()];
  }
  text.textContent = rew + ", " + rew2;
  document.body.style.backgroundImage =
    "linear-gradient(to bottom right," + rew + "," + rew2 + ")";
});
function randomnumber() {
  return Math.floor(Math.random() * colour.length);
}
