Crafty.c("Player", {
	contactTemp: "room",
	init: function() {
		this.addComponent("2D, Canvas, Color, Collision, Gravity, Twoway, Keyboard");
		this.twoway(10, 7);
		this.gravity("Ground");
		this.bind("EnterFrame", function() {
			booya = this.hit("Door");
			if(booya.length > 0) {
				theDoor = booya[0];
				//console.log(theDoor.destination);
				}			
			if(this.contactTemp == "room") {
				this.w -= 0.1;
				}
			else if (this.contactTemp == "hot") {
				this.w -= 1;
				}
			else {	// Cold
				tihs.w += 0.1;
				}
			});
		this.bind("KeyDown", function() {
			if(this.isDown("UP_ARROW")) {
				booya = this.hit("Door");
				if(booya.length > 0) {
					theDoor = booya[0];
					this.x = theDoor.obj.destination.x;
					this.y = theDoor.obj.destination.y;
					}
			}
		});
		this.collision();
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

Crafty.c("TemperatureBlock", {
	temp: 0,
	init: function() {
		this.addComponent("2D, Canvas, Collision");
		},
	setTemp: function(e) {
		this.temp = e;
		if(this.temp > 75) {
			this.addComponent("Hot");
		}
		else if(this.temp <= 75 >= 40) {
			this.addComponent("RoomTemperature");
		}
		else {
			this.addComponent("Cold");
		}
	}
	});

Crafty.c("Door", {
	destination: {x: 100, y: 100},
	init: function() {
		this.addComponent("2D, Canvas, Color, Collision");
		this.collision();
	},
	initializeVariables: function(e) {
		this.destination = e.destination;
		if(e.color == "Blue") {
			this.color("#0000FF");
			}
		else {
			this.color("#FF0000");
		}
	}
	});
