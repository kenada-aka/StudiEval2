
/* Class Player */

const Player = function() {
	this.score = 0;
	this.round = 0;
};

/* Class Game */

const Game = function() {
	this.dice;
};

Game.prototype = {
	
	// Démarrer le jeu
	
	start:function() {
		
		// Initialisation du Canvas
		
		this.dice = new Dice(200, 200);
		this.dice.init("dice");
		
		// Initialisation des événements
		
		_addEventListener($('#new'), "click", function(e) { console.log("new"); });
		_addEventListener($('#roll'), "click", function(e) { console.log("roll"); });
		_addEventListener($('#hold'), "click", function(e) { console.log("hold"); });
		
	},
	
	// Debug / Test
	
	test:function() {
		this.dice.draw(5); // test
		//this.dice.draw(6); // test ng
		//this.dice.draw("a"); // test ng
	}
	
};


// Instantiation de la classe Game

let game = new Game;

// Démarrage du jeu

game.start();

// Test

game.test();
