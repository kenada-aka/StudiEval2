
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
			Alert("Désolé, votre navigateur ne prend pas en charge l'élément canvas !");
		}
	},
	
	// Rendu
	
	draw:function(number) {
		
		// Vérification de la propriété "mapping" (Array) avec "number"
		
		if(typeof this.mapping[number] == "undefined") {
			Alert("La valeur du dé doit être comprise entre 0 et 5");
			return;
		}
		
		// Rafraichissement du canvas
		
		this.ctx.clearRect(0, 0, this.width, this.height);
		
		// Fond blanc
		
		this.ctx.fillStyle = "#fff";
		this.ctx.fillRect(0, 0, this.width, this.height);
		this.ctx.fill();
		
		// Réglage du padding
		let padding = {x:this.width/3, y:this.height/3};
		// Taille du cercle
		let size = 20;
		// Position de départ + Centrage
		let x = padding.x/2;
		let y = padding.y/2;
		
		// Dessine le(s) cercle(s)
		// INFO : Décallage entre la valeur virtuel du dé et le programme (exemple : la valeur 2 dans le programme correspond à 3 sur le dé)
		
		this.ctx.fillStyle = "#ef473a";
		for(let i = 0, ii = this.mapping[number].length; i < ii; i++) {
			if(this.mapping[number][i] != "-") {
				this.ctx.beginPath();
				// arc(x, y, rayon, angleDépart, angleFin, sensAntiHoraire)
				this.ctx.arc(x, y, size, 0, 2 * Math.PI);
				this.ctx.fill();
			}
			// Gestion de la position (x, y) suivante de la matrice 3x3
			if((i+1) % 3 == 0) {
				x = padding.x/2;
				y += padding.y;
			} else {
				x += padding.x;
			}
		}
	}
	
};
