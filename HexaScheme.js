const hexNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const button = document.getElementById("button");

const colorName = document.querySelector(".color");


button.addEventListener("click", function(){

	let hexColor = "#";

			for (let i=0; i<6; i++){
				hexColor += hexNumbers[getRandomNumber()];
				}

			colorName.textContent= hexColor;
			document.body.style.backgroundColor=hexColor;
	});


		function getRandomNumber() {
  		return Math.floor(Math.random() * hexNumbers.length);
}
