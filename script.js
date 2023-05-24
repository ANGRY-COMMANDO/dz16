alert("Вы готовы начать игру ?")
const player = document.getElementById("player");
const rock = document.getElementById("rock");
const counter = document.querySelector('.counter');
let count = 0;

document.addEventListener("keydown", function(event){
	jump();
});

function jump () {
	if (player.classList != "jump"){
		player.classList.add("jump")
	}
	setTimeout( function(){
		player.classList.remove("jump")
	}, 300);
}


rock.addEventListener("animationiteration", () => {
  const leftValue = window.getComputedStyle(rock).getPropertyValue("left");
  if (leftValue === "-100px") {
    count++;
  }
});

let isAlive = setInterval (function() {
	let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
	let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));

	if (rockLeft < 20 && rockLeft > 0 && playerTop >= 140){
		alert("Игра окончена! Ваш счет :" +  count);
	}
}, 10)

