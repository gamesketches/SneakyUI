window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
 	Crafty.background("#000000");

	Crafty.e("Player").attr({x: 500, y: 300, w: 100, h: 50}).color("#0000FF");

	var door1 = Crafty.e("Door").attr({x: 600, y: 300, w: 200, h: 300});

	door1.initializeVariables({destination: {x: 300, y: 100}, color: "Red"});

	Crafty.e("Ground").attr({x: 0, y: 600, w: 1000, h: 10});

});
