
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
