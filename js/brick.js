import {detectCollision} from '../js/collisionDetection.js';
export default class Brick
{
	constructor(game, position, color)
	{
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.game = game;
		this.width = 80;
		this.height = 24;
		this.markedForDeletion = false;
		this.score = 0;
		this.position = position;
		this.color = color;
	}
	
	draw(ctx)
	{
		ctx.fillStyle = this.color;
		ctx.fillRect(this.position.x,this.position.y, this.width, this.height);	
	}
	
	update(dt)	
	{
		if(detectCollision(this.game.ball, this))
		{
			this.game.ball.speed.y = -this.game.ball.speed.y;
			this.markedForDeletion = true;
		}		
	}
}