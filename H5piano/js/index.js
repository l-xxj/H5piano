window.requestAnimFrame = (function () {
		return  window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();

	Math.randMinMax = function(min, max, round) {
		var val = min + (Math.random() * (max - min));
		
		if( round ) val = Math.round( val );
		
		return val;
	};
	Math.TO_RAD = Math.PI/180;
	Math.getAngle = function( x1, y1, x2, y2 ) {
		
		var	dx = x1 - x2,
			dy = y1 - y2;
		
		return Math.atan2(dy,dx);
	};
	Math.getDistance = function( x1, y1, x2, y2 ) {
		
		var 	xs = x2 - x1,
			ys = y2 - y1;		
		
		xs *= xs;
		ys *= ys;
		 
		return Math.sqrt( xs + ys );
	};

	var 	FX = {};

	(function() {
		
		var	canvas = document.getElementById('myCanvas'),
			ctx = canvas.getContext('2d'),
			lastUpdate = new Date(),
			mouseUpdate = new Date(),
			lastMouse = [],
			width, height;

		FX.particles = [];

		
		
   
        $('li').mousedown(function(){
           var a=$(this).html();
		   var height = $(this).height();
		  
		   (a=='') ?  canvas.height = height*0.78125 : canvas.height =height*0.46875;
			var width = $(this).width();
			var top = canvas.height;
			
			var left = $(this).offset().left;
			var x, y, degree;
		
			
			canvas.width = canvas.height*8.8;
		 console.log(canvas.height);
			
			
				
			
					x = left+width/2;
					
					
					
				
						y = top;
						degree = 90;
					
				
				createParticle({
					x: x,
					y: y,
					degree: degree,  //前进的方向
					speed: canvas.height,
					
					vs: -canvas.height/80 //阻力加速度
				});
        	
        })
   
   
	
		

		loop();



		function createParticle( args ) {

			var options = {
				x: width/2,
				y: height/2,
				color: 'hsla('+ Math.randMinMax(160, 290) +', 100%, 50%, '+(Math.random().toFixed(2))+')',
				vs: Math.randMinMax(-8,-5)
			};

			for (key in args) {
			  options[key] = args[key];
			}

			FX.particles.push( options );
		}

		function loop() {

			var 	thisUpdate = new Date(),
				delta = (lastUpdate - thisUpdate) / 1000,
				amount = FX.particles.length,
				size = canvas.height/30,
				i = 0,
				p;

			
			ctx.fillRect(0,0,canvas.width,canvas.height);

			ctx.globalCompositeStyle = 'lighter';

			for(;i<amount;i=i+1) {

				p = FX.particles[ i ];

				
				p.speed += (p.vs);// * delta);
				if( p.speed < 0 ) continue;

				p.x += Math.cos(p.degree * Math.TO_RAD) * (p.speed * delta);
				p.y += Math.sin(p.degree * Math.TO_RAD) * (p.speed * delta);

				ctx.save();
			
			
			
				ctx.translate( p.x, p.y );
				ctx.rotate( p.degree * Math.TO_RAD ); //旋转
				
				ctx.fillStyle = p.color;
				
				
				ctx.beginPath();
				ctx.save();
				ctx.rotate(55*Math.PI/180);
				ctx.scale(2, 1);
				ctx.arc(size,size,size,0,Math.PI*2,false);
				ctx.fillStyle = p.color;
				ctx.fill();
				
				ctx.restore();
				ctx.rotate(90*Math.PI/180);
							
				ctx.fillRect( 2, 0, size/3, size*10 );
				ctx.restore();
			}

			lastUpdate = thisUpdate;

			requestAnimFrame( loop );
		}

	})();