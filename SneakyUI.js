window.onload = (function() {

	var WIDTH = 900,
		HEIGHT = 650;

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

	// Room 1 --------------------------------------------------

	Crafty.e("2D, Canvas, Text").attr({ x: 100, y: 100 }).text('Use your meter to tell which door is hot and which door is cold')
	  .textColor('#FF0000');

	Crafty.e("2D, Canvas, Text").attr({ x: 100, y: 160 }).text('Room 1')
	  .textColor('#FF0000');

	var door1 = Crafty.e("Door").attr({x: 600, y: 300, w: 200, h: 300});
	// Door to room 2
	door1.initializeVariables({destination: {x: 2000, y: 100}, color: "Red", temp: 100});

	var door2 = Crafty.e("Door").attr({x: 200, y: 300, w: 200, h: 300});
	// Door to room 3
	door2.initializeVariables({destination: {x: 3500, y: 100}, color: "Blue", temp: 0, tempReading: "Cold"});

	Crafty.e("Ground").attr({x: 0, y: 600, w: 1000, h: 10});

	// Room 2 --------------------------------------------------
	
	Crafty.e("2D, Canvas, Text").attr({ x: 2000, y: 100 }).text('Room 2')
	  .textColor('#FF0000');

	door1 = Crafty.e("Door").attr({x: 2000, y: 300, w: 200, h: 300});
	// Door back to room 1
	door1.initializeVariables({destination: {x: 650, y: 300}, color: "Red", temp: 100, tempReading: "Hot"});

	Crafty.e("Ground").attr({x: 1800, y: 600, w: 1000, h: 10});
	
	// Room 3 --------------------------------------------------
	Crafty.e("2D, Canvas, Text").attr({ x: 3500, y: 100 }).text('Room 3')
	  .textColor('#FF0000');

	var door1 = Crafty.e("Door").attr({x: 3500, y: 300, w: 200, h: 300});
	// Door back to room 1
	door1.initializeVariables({destination: {x: 200, y: 100}, color: "Blue", temp: 0, tempReading: "Cold"});

	var door2 = Crafty.e("Door").attr({x: 4000, y: 300, w: 200, h: 300});
	// Door to room 5
	door2.initializeVariables({destination: {x: 6500, y: 100}, color: "Blue", temp: 0, tempReading: "Cold"});

	var door3 = Crafty.e("Door").attr({x: 4800, y: 200, w: 200, h: 300});
	// Door to room 4
	door3.initializeVariables({destination: {x: 5500, y: 100}, color: "Red", temp: 100, tempReading: "Hot"});

	Crafty.e("Ground").attr({x: 3200, y: 600, w: 1000, h: 10});
	Crafty.e("Ground").attr({x: 4200, y: 500, w: 800, h: 110});

	// Room 4 --------------------------------------------------

	Crafty.e("2D, Canvas, Text").attr({ x: 5500, y: 100 }).text('Room 4')
	  .textColor('#FF0000');

	var door1 = Crafty.e("Door").attr({x: 5500, y: 300, w: 200, h: 300});
	// Door back to room 3
	door1.initializeVariables({destination: {x: 4800, y: 100}, color: "Red", temp: 100, tempReading: "Hot"});

	Crafty.e("Ground").attr({x: 5300, y: 600, w: 700, h: 10});

	// Room 5 --------------------------------------------------

	Crafty.e("2D, Canvas, Text").attr({ x: 6500, y: 100 }).text('Room 5')
	  .textColor('#FF0000');

	var door1 = Crafty.e("Door").attr({x: 6500, y: 300, w: 200, h: 300});
	// Door back to room 3
	door1.initializeVariables({destination: {x: 4000, y: 100}, color: "Blue", temp: 0, tempReading: "Cold"});

	var door2 = Crafty.e("Door").attr({x: 7000, y: 300, w: 200, h: 300});
	// Door to room 5.5
	door2.initializeVariables({destination: {x: 9000, y: 300, w: 200, h: 300}, color: "Blue", temp: 100, tempReading: "Hot"});

	var door3 = Crafty.e("Door").attr({x: 7500, y: 200, w: 200, h: 300});
	// door to room 6
	door3.initializeVariables({destination: {x: 10000, y: 100}, color: "Red", temp: 0, tempReading: "Cold"});

	Crafty.e("Ground").attr({x:6300, y: 600, w: 1100, h: 10});
	Crafty.e("Ground").attr({x: 7300, y: 500, w: 500, h: 110});

	// Room 6 ------------------------------------------------

	Crafty.e("2D, Canvas, Text").attr({ x: 9000, y: 100 }).text('Room 6')
	  .textColor('#FF0000');

	var door1 = Crafty.e("Door").attr({x: 9000, y: 300, w: 200, h: 300});
	// Door back to room 5
	door1.initializeVariables({destination: {x: 7000, y: 100}, color: "Red", temp: 100, tempReading: "Hot"});

	Crafty.e("Ground").attr({x: 8800, y: 600, w: 500, h: 10});

	// Room 7 --------------------------------------------------

	Crafty.e("2D, Canvas, Text").attr({ x: 10000, y: 100 }).text('Room 7')
	  .textColor('#FF0000');

	var door1 = Crafty.e("Door").attr({x: 10000, y: 300, w: 200, h: 300});
	// Door back to room 5
	door1.initializeVariables({destination: {x: 7500, y: 100}, color: "Blue", temp: 0, tempReading: "Cold"});

	var door2 = Crafty.e("Door").attr({x: 11000, y: 100, w: 200, h: 300});
	// Door to room 8
	door2.initializeVariables({destination: {x: 12000, y: 300}, color: "Blue", temp: 0, tempReading: "Cold"});

	var door3 = Crafty.e("Door").attr({x: 11000, y: 500, w: 200, h: 50});
	// Door to room 9
	door3.initializeVariables({destination: {x: 14000, y: 300}, color: "Red", temp: 100, tempReading: "Hot"});

	Crafty.e("Ground").attr({x: 9800, y: 600, w: 1500, h: 10});

	Crafty.e("Ground").attr({x: 10500, y: 500, w: 300, h: 100});

	// Room 8 --------------------------------------------------

	Crafty.e("2D, Canvas, Text").attr({ x: 12000, y: 100 }).text('Room 8')
	  .textColor('#FF0000');

	var door1 = Crafty.e("Door").attr({x: 12000, y: 300, w: 200, h: 300});
	// Door back to room 7
	door1.initializeVariables({destination: {x: 11000, y: 100}, color: "Blue", temp: 0, tempReading: "Cold"});

	var door2 = Crafty.e("Door").attr({x: 12500, y: 300, w: 200, h: 300});
	// Door to Win
	door2.initializeVariables({destination: {x: 15000, y: 100}, color: "Red", temp: 0, tempReading: "Hot"});

	door2.doorType = "Win";

	var door3 = Crafty.e("Door").attr({x: 13000, y: 300, w: 200, h: 300});
	// Door to Lose
	door3.initializeVariables({destination: {x: 15000, y: 100}, color: "Blue", temp: 100, tempReading: "Cold"});

	door3.doorType = "Lose";
	
	Crafty.e("Ground").attr({x: 11800, y: 600, w: 1700, h: 10});

	// Room 9 ---------------------------------------------------------

	Crafty.e("2D, Canvas, Text").attr({ x: 14000, y: 100 }).text('Room 9')
	  .textColor('#FF0000');

	var door1 = Crafty.e("Door").attr({x: 14000, y: 300, w: 200, h: 300});
	// Door back to room 7
	door1.initializeVariables({destination: { x: 11000, y: 100}, color: "Red", temp: 100, tempReading: "Hot"});

	Crafty.e("Ground").attr({x: 13700, y: 600, w: 700, h: 10});

	// Game Ending Entities

	Crafty.e("2D,Canvas,Collision,Win").attr({x: 15000, y: 100}).collision();

	Crafty.e("2D,Canvas,Collision,Lose").attr({x: 16000, y: 100}).collision();

	Crafty.scene("Victory", function() {
		var player = Crafty.e("2D,Canvas,Text").attr({x: 500, y:300}).text("You Win").textColor("#FF0000");
		Crafty.unbind("EnterFrame");
		Crafty.viewport.x = -1 * (player.x - WIDTH/2);
		Crafty.background("Green");
		});

	Crafty.scene("Defeat", function() {
		var textHandler = Crafty.e("2D,Canvas,Text,Keyboard").attr({x: 500, y:300}).text("You Lose").textColor("#FF0000");
		Crafty.background("Red");
		});

	var player = Crafty.e("Player").attr({x: 500, y: 300, w: 100, h: 50}).color("#00FF00");


	Crafty.bind("EnterFrame", function() {
		var vpx = player.x - WIDTH/2;

		Crafty.viewport.x = -vpx;
		});

});
