
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
	
	// Active/Désactive le témoin (cercle rouge) qui indique le joueur entrain de jouer...
	
	toggleCurrentPlayer:function() {
		$('div.player'+ this.id +' i').classList.toggle("active");
		
	},
	
	// Mise à jour du score
	
	updateGlobal:function() {
		this.score += this.round;
		this.round = 0;
		$('div.global'+ this.id +' input').value = this.score;
		this.updateRound(0);
	},
	
	// Mise à jour de round
	
	updateRound:function(number) {
		this.round += number;
		$('div.round'+ this.id +' input').value = this.round;
	}
	
};

/* Class Game */

const Game = function() {
	this.dice;
	this.state = "finish";
	this.currentPlayer = "P1";
	this.players = {
		P1:null,
		P2:null
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
		_addEventListener($('#roll'), "click", this.roll.bind(this));
		_addEventListener($('#hold'), "click", this.hold.bind(this));
		
	},
	
	// Rafraichissement de la partie
	
	refresh:function() {
		// Initialisation du joueur 1
		this.players.P1 = new Player("P1");
		this.players.P1.init();
		this.players.P1.updateGlobal();
		this.players.P1.toggleCurrentPlayer();
		// Initialisation du joueur 2
		this.players.P2 = new Player("P2");
		this.players.P2.init();
		this.players.P2.updateGlobal();
		// Définition du joueur en cours
		this.currentPlayer = "P1";
		// Status de la partie
		this.state = "start";
	},
	
	// Lancer le dé
	
	roll:function() {
		if(this.state != "start") {
			alert("Cliquez sur NEW GAME, merci ;)");
			return;
		}
		// Génétation d'un nombre aléatoire entre 0 et 5
		let number = Math.floor(Math.random() * Math.floor(6));
		// Mise à jour du Canvas
		this.dice.draw(number);
		// Mise à jour des points de round du joueur en cours
		// En fonction des règles du jeu :
		// Si le joueur obtient un 1 avec le dé (soit 0 dans le programme), le score dans round est perdu et c'est la fin de son tour !
		if(number != 0) {
			this.players[this.currentPlayer].updateRound(number+1);
		} else {
			this.players[this.currentPlayer].round = 0;
			this.hold();
		}
	},
	
	// Sauvegarde des points
	
	hold:function() {
		if(this.state != "start") {
			alert("Cliquez sur NEW GAME, merci ;)");
			return;
		}
		// Mise à jours des points
		this.players[this.currentPlayer].updateGlobal();
		// Vérification des points du joueur
		if(this.players[this.currentPlayer].score >= 100) {
			alert("Félicitation "+ this.currentPlayer +" vous avez gagné, vous avez plus de 100 points");
			// Fin de partie
			this.refresh();
		} else {
			// Désactive le joueur
			this.players[this.currentPlayer].toggleCurrentPlayer();
			// Alternance de joueur
			this.currentPlayer = this.currentPlayer == "P1" ? "P2" : "P1";
			// Active le joueur
			this.players[this.currentPlayer].toggleCurrentPlayer();
		}
	},
	
	// Debug / Test
	
	test:function() {
		//this.dice.draw(5); // test
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
