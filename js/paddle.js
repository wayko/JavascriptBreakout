
export default class Paddle
{
	
		constructor(game)
		{
			this.gameWidth = game.gameWidth;
			this.gameHeight = game.gameHeight;
			this.width = 150;
			this.height= 20;
			this.maxSpeed = 7;
			this.speed = 0;
			
			this.position = 
			{
				x: game.gameWidth/2 - this.width /2,
				y: game.gameHeight - this.height - 10
			};
		}
		
		moveLeft()
		{
			this.speed = -this.maxSpeed;
		}
		
		moveRight()
		{
			this.speed = this.maxSpeed;
		}
		
		moveUp()
		{
			this.position.y = this.position.y - 10;
		}
		moveDown()
		{
			this.position.y = this.position.y + 10;
		}
		stop()
		{
			this.speed = 0;
		}
		
		draw(ctx)
		{
			ctx.fillStyle = '#0ff'
			ctx.fillRect(this.position.x, this.position.y, this.width, this.height);	
		}
		
		update(dt)
		{
			this.position.x += this.speed;
			
			if(this.position.x < 0) this.position.x = 0;
			if(this.position.y < 0) this.position.y = 0;
			
			if(this.position.x + this.width > this.gameWidth) 
			
			this.position.x = this.gameWidth - this.width ;		
			
			if(this.position.y + this.height > this.gameHeight) 
			
			this.position.y = this.gameHeight - this.height ;		
			
		}
}
