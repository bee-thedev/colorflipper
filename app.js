
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("button");
const colorChange = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor= colors[randomNumber];
  colorChange.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}