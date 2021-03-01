
/* Class Dice */

const Dice = function(width, height) {
	
	this.width = width;			// largeur
	this.height = height;		// hauteur
	
	this.canvas,				// element
	this.ctx;					// context
	
	// Mapping des différentes faces du dé virtuel (dans l'ordre de 1 à 6)
	// '-' = vide
	// 'X' = cercle
	
	this.mapping = [
		// 1
		['-','-','-',
		 '-','X','-',
		 '-','-','-'],
		// 2
		['X','-','-',
		 '-','-','-',
		 '-','-','X'],
		// 3
		['-','-','X',
		 '-','X','-',
		 'X','-','-'],
		// 4
		['X','-','X',
		 '-','-','-',
		 'X','-','X'],
		// 5
		['X','-','X',
		 '-','X','-',
		 'X','-','X'],
		// 6
		['X','-','X',
		 'X','-','X',
		 'X','-','X']
	];
};

Dice.prototype = {
	
	// Initialisation
	
	init:function(id) {
		this.canvas = document.getElementById(id);
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		if(this.canvas.getContext) {
			this.ctx = this.canvas.getContext("2d");
		} else {
			alert("Désolé, votre navigateur ne prend pas en charge l'élément canvas !");
		}
	},
	
	// Rendu
	
	draw:function(number) {
		
		let size = 50;
		let x = 25;
		let y = 25;
		
		this.ctx.fillStyle = "#332";
		for(let i = 0, ii = this.mapping[number].length; i < ii; i++) {
			if(this.mapping[number][i] != "-") {
				this.ctx.beginPath();
				//var j = dotsToDraw[i];
				// arc(x, y, rayon, angleDépart, angleFin, sensAntiHoraire)
				this.ctx.arc(x, y, size*0.07, 0, 2 * Math.PI);
				this.ctx.fill();
				
			}
			console.log(x, y);
			// Gestion de la position (x, y) suivante de la matrice 3x3
			if((i+1) % 3 == 0) {
				x = 25;
				y += 50;
			} else {
				x += 75;
			}
		}
	}
	
};
