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
		
		this.position = position;
		this.color = color;
		/* this.color2 = color2;
		this.color3 = color3; */
		
	
		console.log(this.color);
	}	
		draw(ctx)
		{
			/* var my_gradient = ctx.createLinearGradient(0, 0, 0, 65);
			my_gradient.addColorStop(0, this.color);
			my_gradient.addColorStop(1, this.color2);
			my_gradient.addColorStop(1, this.color3); */
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