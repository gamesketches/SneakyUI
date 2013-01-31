Crafty.c("Player", {
	init: function() {
		this.addComponent("2D, Canvas, Color, Collision, Gravity, Twoway");
		this.twoway(10, 7);
		this.gravity("Ground");
		}
	});

Crafty.c("Ground", {
	init: function() {
		this.addComponent("2D, Canvas, Color");
	}
	});

Crafty.c("UIElement", {
	noise: 0,
	init: function() {
		this.addComponent("2D, Canvas, Text");
		}
	});
