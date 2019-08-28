import Paddle from '../js/paddle.js';
import InputHandler from '../js/input.js';
import Ball from '../js/ball.js';
import Brick from '../js/brick.js';
import {buildLevel, level1} from '../js/level.js';
const GAMESTATE =
{
	PAUSED: 0,
	RUNNING: 1, 
	MENU: 2,
	GAMEOVER: 3
};
export default class Game
{
	constructor(gameWidth, gameHeight)
	{
		this.gameWidth = gameWidth;
		this.gameHeight= gameHeight;
		
		this.gameState = GAMESTATE.MENU;
		this.paddle = new Paddle(this);
		this.ball = new Ball(this);
		this.gameObjects = [];
		this.lives = 1;
		new InputHandler(this.paddle, this);
	}
	
	start()
	{
		if(this.gameState !== GAMESTATE.MENU) return;
		
		let bricks = buildLevel(this, level1);
		for(let i = 0; i<10; i++)
		
		this.gameObjects = 
		[
			this.ball,
			this.paddle,
			...bricks
		];
		
		this.gameState = GAMESTATE.RUNNING;
	}
	
	update(deltaTime)
	{
		if(this.lives === 0) this.gameState = GAMESTATE.GAMEOVER;
		if(this.gameState === GAMESTATE.PAUSED || this.gameState === GAMESTATE.MENU || this.GAMESTATE === GAMESTATE.GAMEOVER) return;
		
		this.gameObjects.forEach((object) => object.update(deltaTime));
		this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
	}
	
	draw(ctx)
	{
		
		this.gameObjects.forEach((object) => object.draw(ctx));
		
		if(this.gameState === GAMESTATE.MENU)
		{
		ctx.rect(0,0, this.gameWidth, this.gameHeight);
		ctx.fillStyle = "rgba(0,0,0,0.5)";
		ctx.fill();
		ctx.font = "30px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText("Press Left Shift to Start", this.gameWidth / 2, this.gameHeight /2);
		};
		if(this.gameState === GAMESTATE.PAUSED)
		{
		ctx.rect(0,0, this.gameWidth, this.gameHeight);
		ctx.fillStyle = "rgba(0,0,0,0.5)";
		ctx.fill();
		ctx.font = "30px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight /2);
		};
		if(this.gameState === GAMESTATE.GAMEOVER)
		{
		ctx.rect(0,0, this.gameWidth, this.gameHeight);
		ctx.fillStyle = "rgba(0,0,0,0.5)";
		ctx.fill();
		ctx.font = "30px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight /2);
		};
	}
	
	togglePause()
	{
		if(this.gameState == GAMESTATE.PAUSED)
		{
			this.gameState = GAMESTATE.RUNNING;
		}
		else
		{
			this.gameState = GAMESTATE.PAUSED;
		}
	}
}