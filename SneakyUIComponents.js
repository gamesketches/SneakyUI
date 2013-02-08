Crafty.c("Player", {
	contactTemp: "RoomTemperature",
	init: function() {
		this.addComponent("2D, Canvas, Color, Collision, Gravity, Twoway, Keyboard");
		this.twoway(10, 7);
		this.gravity("Ground");
		this.bind("EnterFrame", function() {
			influences = this.hit("TemperatureBlock");
			if(influences.length > 0) {
				var curMax = 0;
				for( var i = 0; i < influences.length; i++) {
					if(influences[i].overlap > influences[curMax].overlap) {
						curMax = i;
						}
					}
				this.contactTemp = influences[curMax].obj.tempType;		
				}
			else {
				this.contactTemp = "RoomTemperature";
			}
			if(this.contactTemp == "RoomTemperature") {
				this.w -= 0.1;
				}
			else if (this.contactTemp == "Hot") {
				this.w -= 1;
				}
			else {	// Cold
				this.w += 0.1;
				}
			});
		this.bind("KeyDown", function() {
			if(this.isDown("UP_ARROW")) {
				booya = this.hit("Door");
				console.log(booya);
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
	tempType: "RoomTemperature",
	init: function() {
		this.addComponent("2D, Canvas, Collision");
		this.collision();
		},
	setTemp: function(e) {
		this.temp = e;
		if(this.temp > 75) {
			this.tempType = "Hot";
		}
		else if(this.temp <= 75 >= 40) {
			this.tempType = "RoomTemperature";
		}
		else {
			this.tempType = "Cold";
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
		Crafty.e("TemperatureBlock").attr({x: this.x, y: this.y, w: this.w, h: this.h}).setTemp(e.temp);
	}
	});
