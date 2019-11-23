/******************************************************\
	FONCTIONS
\******************************************************/
/**

*	Random
*	Generate a number between 1 and ceil (1 and ceil included)
*/
var hindi_global = "abc"
var english_global = "bcd"

mywords = []
class question {
  constructor(answer,hindi,english,s) {
    this.hindi = hindi;
    this.english = english;
    this.answer = answer;
    this.score = s;
  }
}



var bubbleflag = 0
var testflag = 0
window.random = function (ceil) {
    "use strict";
    if ((ceil = parseInt(ceil, 0)) > 0) {
        return Math.abs(Math.floor(Math.random() * ceil + 1)); 
    } else {
        return Math.random(); 
    }
};

/**
* RequestAnimFrame
* request an animation frame to browser
*/
window.requestAnimation = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;

/**
*	StopAnimation
*	cancel an animation previously threw trough requestAnimationFrame
*/
window.stopAnimation = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;


window.animStartTime = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime;

/******************************************************\
	CLASSES
\******************************************************/

// COLOR
//======================
var Color = function(color) {
    "use strict";
	this.color = '';
	this.colors = ['', 'rgba(255, 0, 0, 0.8)', 'rgba(167, 255, 0, 0.8)', 'rgba(167, 0, 255, 0.8)'];
	
	if(typeof color == 'undefined') {
		this.color = this.colors[random(this.colors.length-1)];
	} else {
		switch(color) {
			case 'red':
				this.color = this.colors[0];
				break;
			case 'green':
				this.color = this.colors[1];
				break;
			case 'purple':
				this.color = this.colors[2];
				break;
			default:
				this.color = '';
				break;
				
		}
	}
	
	this.getColor = function() { return this.color; };
};


// CODE
//=====================



// POSITION
//======================================
var Position = function(x, y) {
	"use strict";
	this.x = 0;
	this.y = 0;
	
	if( typeof x != 'undefined')	this.setX( x );
	if( typeof y != 'undefined')	this.setY( y );
};
// Setters & Getters
Position.prototype.getX = function() { return this.x; };
Position.prototype.getY = function() { return this.y; };
Position.prototype.setX = function(x) { this.x = parseInt(x); };
Position.prototype.setY = function(y) { this.y = parseInt(y); };

// Bubble
//==================================================
var Bubble = function(game, color, position, string) {
	"use strict";
	if( (game instanceof Game) ||
	  	(color instanceof Color) ||
	  	(position instanceof Position) ) {
		
		var obj = this;
		this.toDOM = $('<span class="bubble"></span>');
		this.game = game;
		this.color = color;
		
		this.x = position.getX();
		this.y = position.getY();
		
		// Configurations
		this.toDOM.css({
			background : this.color.getColor(),
				  left : this.x,
				   top : this.y
		});
		this.toDOM.text(string);

		// Insertion
		var screen = game.platform.screen; 
		screen.append(this.toDOM);
	}	
};
// Methods
Bubble.prototype.move = function() {
	if(this.game.platform.mode > 1) {
		this.y = this.y - ((this.game.platform.mode * 3)/4);
	} else {
		this.y--;
	}
	this.toDOM.css({top : this.y});
};

// SCORE
//======================
var Score = function(g) {
	"use strict";
	if(g instanceof Game) {
		this.game = g;
		this.score = 0;
		this.screen = $('#score');
	}
};
Score.prototype.display = function() {
	this.screen.text(this.score);
};




// MISSING
var Missing = function(g) {
	"use strict";
	if(g instanceof Game) {
		this.game = g;
		this.missing = this.game.missable;
		this.screen = $('#missed');
	}
};
Missing.prototype.display = function() {
	this.screen.text(this.missing);
};


// GAME
//=====================
var Game = function(p) {
	"use strict";
	if( p instanceof Platform) {
		this.missable = 1;
		this.platform = p;
		this.username = '';
		this.score = new Score(this);
		this.missing = new Missing(this);
	}
};

Game.prototype.loop = 0;
// Init Game
Game.prototype.init = function() { 
	this.platform.screen.html(''); 

	this.score = new Score(this);
	
	this.missing = new Missing(this);
};
// Remove Bubble
/*Game.prototype.removeBubble = function(code) {
	var g = this;
	g.platform.screen.children().each(function() {
		var bubble = {
				 get : $(this),
				code : getCodeFromText($(this).text())
		};
		
		if(bubble.code == code) {
			bubble.get.animate({top : g.platform.screen.height()}, {
				duration : 500,
				complete : function() { $(this).remove(); }
			});
			g.platform.soundManager.goal.play();
			g.score.score++;
		}
	});
};
*/

sendandget = function(g,bubble)
{
	
	answer = document.getElementById("ans").value;

		
		//call Answer API, update the score, and store it in a var called s
		s = 1;
		myword = new question(answer,english_global,hindi_global,s);
		mywords.push(myword);
		//update score++
		//call FetchQ API and update global vars
		bubble.get.remove();
		g.platform.soundManager.fail.play();
		g.missing.missing++;
		bubbleflag = 0;
		g.addBubble(hindi_global);
		console.log(mywords);
	


};

// Add Bubble
Game.prototype.addBubble = function(s) {
	var randomX = random(this.platform.screen.width() - 45);
	var randomY = this.platform.screen.height() + random(200);
	var p = new Position(randomX, randomY); // Random position

	if(this.loop >= 30 && bubbleflag==0 ) { // Generate Bubble
		var b = new Bubble(this, new Color(), p,s);
		this.loop = 0;
		bubbleflag=1 ;
	}
};

// Play Game
Game.prototype.play = function(g) {
	if(g instanceof Game) { 
		
		g.addBubble(hindi_global);
	
		
		
		
		
		g.platform.screen.children().each(function() {
			var bubble = {
				     get : $(this),
				position : $(this).offset()
			};
			
			if(bubble.get.position().top <= 0) {
				sendandget(g,bubble);
				
			} else {
				if(g.platform.mode > 1) {
					bubble.position.top = bubble.position.top - ((g.platform.mode * 3)/4);
				} else {
					bubble.position.top--;
				}
				bubble.get.offset(bubble.position);
			}
		});
		
		// DISPLAYING SCORE, MISSABLE, TIMER
		g.score.display();
		g.missing.display();
		
		g.loop++;
		
		// TESTING IF GAME IS OVER
		if(g.missing.missing > 3) {
			g.platform.switchState(g.platform.overState);
		} else {
			g.platform.loop = requestAnimation(function() { g.play(g); });
		}
	}
};

// STATE
// Classe 100% abstraite
//======================
var State = function() {
	"use strict";
	this.enter = function() {};
	this.leave = function() {};
};
State.prototype.loop;
State.prototype.hideMenu = function() { $('#menu').find('li').each(function() { $(this).hide(); }); $('#main').hide(); };
State.prototype.showState = function(el) { $('#main').show(); el.fadeIn(300); };


// MENU
// extends State
//=====================
var MenuState = function(g) {
	"use strict";
	if(g instanceof Game) { 
		this.game = g;
		this.screen = $('#menuscreen');
		this.gameMode = $('#gameMode');
		
		this.enter = function() {
			$(document).off('keyup');
			var obj = g;
			g.platform.stopAnim();
			g.init();
			this.hideMenu();
			this.showState(this.screen);
			var xhr = new XMLHttpRequest();
			function checkAnswer()
			{
				if(xhr.readyState==4&&xhr.status==200)
				{
					var resp = JSON.parse(xhr.responseText);
					hindi_global = resp.result.hindi_word;
				}
			}
			this.gameMode.children().on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				
				switch(this.id) {
					case 'modeBeginner':
						testflag = 1;
						obj.platform.mode = 4;
						break;
					case 'modeMedium':
						obj.platform.mode = 4;
						break;
					case 'modePro':
						obj.platform.mode = 3;
						break;
					default:
						obj.platform.mode = 1;
						break;
				}
				console.log("xhr.responseJSON");
				//send API request and update the global variables
				xhr.onreadystatechange = checkAnswer;
				xhr.open("GET","http://localhost:5000/get_a_word",true);
				xhr.send();
				//console.log(xhr.responseText);
				obj.platform.switchState(obj.platform.playState);
				
				return false;
			});
		};
	}
};
MenuState.prototype = new State();

// PLAY
// extends State
//=====================
var PlayState = function(g) {
	"use strict";
	if(g instanceof Game) {
		this.game = g;
		
		this.enter = function() {
			
			$('#stat').fadeIn('slow');
			this.hideMenu();
			g.platform.stopAnim();
			
			g.platform.loop = requestAnimation(function() { g.play(g); });
			document.getElementById("submit").addEventListener("click", g.sendandget);

		};
		


		this.leave = function() { $(document).off('keyup'); $('#stat').hide(); };
	}
};
PlayState.prototype = new State();

// PAUSE
// extends State
//=====================


// OVER
// extends State
//=====================
var OverState = function(g) {
	"use strict";
	if(g instanceof Game) { 
		this.game = g;
		this.screen = $('#scorescreen');
		
		this.enter = function() {
			var obj = g;
			g.platform.soundManager.gameover.play();
			var result = $('<h4>Hi, '+g.username+'! Here are your scores.</h4><p>Well Done!</p><table><tr><td>Sl. No.</td><td>	Question</td><td>Your Answer</td><td>Actual Answer</td><td>Score</td></tr><tr><td>1</td><td>mywords[0].hindi</td><td>mywords[0].answer</td><td>mywords[0].english</td><td>mywords[0].score</td></tr><tr><td>2</td><td>mywords[1].hindi</td><td>mywords[1].answer</td><td>mywords[1].english</td><td>mywords[0].score</td></tr><tr><td>3</td><td>mywords[2].hindi</td><td>mywords[2].answer</td><td>mywords[2].english</td><td>mywords[0].score</td></tr></table>');
			g.platform.stopAnim();
			this.hideMenu();
			$('#gameresult').append(result);
			this.showState(this.screen);
$('.returnMenu').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				
				obj.platform.switchState(obj.platform.menuState);
				
				return false;
			});
			
			
		};
	}
};
OverState.prototype = new State();

// SOUNDMANAGER
//=============================
var SoundManager = function() {
	"use strict";
	this.sound = {};
};

SoundManager.prototype.play = function() {
	this.sound.pause();
	
	this.sound.play();
};

var GoalSound = function() {};
GoalSound.prototype = new SoundManager();
GoalSound.prototype.sound = document.getElementById('soundGoal');

var FailSound = function() {};
FailSound.prototype = new SoundManager();
FailSound.prototype.sound = document.getElementById('soundFailure');

var WarningSound = function() {};
WarningSound.prototype = new SoundManager();
WarningSound.prototype.sound = document.getElementById('soundNope');

var GameOverSound = function() {};
GameOverSound.prototype = new SoundManager();
GameOverSound.prototype.sound = document.getElementById('soundEnd');

// PLATFORM
//=========================
var Platform = function() {
	"use strict";
	var obj = this;
};

Platform.prototype.mode = 1;
Platform.prototype.loop = undefined;

Platform.prototype.switchState = function(state) {
	"use strict";
	if( state instanceof State ) {
		this.current_state.leave();
		this.current_state = state;
		this.current_state.enter();
	}
};

Platform.prototype.stopAnim = function() { 
	if(typeof this.loop != 'undefined') {
		stopAnimation(this.loop);
		this.loop = undefined;
	} 
};

Platform.prototype.init = function() {
	"use strict";

	var username = undefined;

	do
	{
		username = prompt("Please enter a username in order to register your score?");
	}
	while ((username == '') || (typeof username != 'string'));

	this.loop = undefined;
	this.game = new Game(this);
	this.game.username = username;
	this.soundManager = {
		    goal : new GoalSound(),
		    fail : new FailSound(),
		 warning : new WarningSound(),
		gameover : new GameOverSound()
	};
	this.screen = $('#gamescreen');
	this.menuState = new MenuState(this.game);
	this.playState = new PlayState(this.game);
	
	this.overState = new OverState(this.game);
	this.current_state = this.menuState;
	
	this.switchState(this.current_state);
};