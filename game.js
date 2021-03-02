
/* Class Player */

// id (string) = "P1" ou "P2"

const Player = function(id) {
	this.id = id;
	this.score = 0;
	this.round = 0;
};

Player.prototype = {
	
	// Initialisation
	
	init:function() {
		this.score = 0;
		this.round = 0;
	},
	
	// Mise à jour du score
	
	updateGlobal:function() {
		$('div.global'+ this.id +' input').value = this.score;
	},
	
	// Mise à jour de round
	
	updateRound:function() {
		$('div.round'+ this.id +' input').value = this.round;
	}
	
};

/* Class Game */

const Game = function() {
	this.dice;
	this.state = "finish";
	this.players = {
		p1:null,
		p2:null
	};
};

Game.prototype = {
	
	// Démarrer le jeu
	
	start:function() {
		
		// Initialisation du Canvas
		
		this.dice = new Dice(200, 200);
		this.dice.init("dice");
		
		// Initialisation des événements + conservation du contexte !
		
		_addEventListener($('#new'), "click", this.refresh.bind(this));
		_addEventListener($('#roll'), "click", function(e) { console.log("roll"); });
		_addEventListener($('#hold'), "click", function(e) { console.log("hold"); });
		
	},
	
	// Rafraichissement de la partie
	
	refresh:function() {
		// Initialisation du joueur 1
		this.players.p1 = new Player("P1");
		this.players.p1.init();
		this.players.p1.updateGlobal();
		this.players.p1.updateRound();
		// Initialisation du joueur 2
		this.players.p2 = new Player("P2");
		this.players.p2.init();
		this.players.p2.updateGlobal();
		this.players.p2.updateRound();
		// Status de la partie
		this.state = "start";
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
