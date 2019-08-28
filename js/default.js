import Game from '../js/Game.js';
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH,GAME_HEIGHT);


ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);




let lastTime = 0;



function gameLoop(timeStamp)
{
	
	let dt = timeStamp - lastTime;
	lastTime = timeStamp;
	ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
	game.update(dt);
	game.draw(ctx);
	
	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);