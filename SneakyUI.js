window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
 Crafty.background("#000000");

	Crafty.e("Player").attr({x: 500, y: 300, w: 400, h: 50}).color("#0000FF");

	Crafty.e("Door").attr({x: 500, y: 300, w: 400, h: 50}).color("#FF0000");

});
