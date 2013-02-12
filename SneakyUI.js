window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
 	Crafty.background("#000000");

	Crafty.sprite(200, "meterCold.png", {
		meterColdSprite: [0,0]
	});
	
	Crafty.sprite(200, "meterRoom.png", {
		meterRoomSprite: [0,0]
	});

	Crafty.sprite(200, "meterHot.png", {
		meterHotSprite: [0,0]
	});

	var door1 = Crafty.e("Door").attr({x: 600, y: 300, w: 200, h: 300});

	door1.initializeVariables({destination: {x: 300, y: 100}, color: "Red", temp: 100});

	var door2 = Crafty.e("Door").attr({x: 200, y: 300, w: 200, h: 300});

	door2.initializeVariables({destination: {x: 700, y: 100}, color: "Blue", temp: 0});

	var player = Crafty.e("Player").attr({x: 500, y: 300, w: 100, h: 50}).color("#00FF00");
	Crafty.e("Ground").attr({x: 0, y: 600, w: 1000, h: 10});

	Crafty.bind("EnterFrame", function() {
		var vpx = player.x - WIDTH/2;

		Crafty.viewport.x = -vpx;
		});

});
