Crafty.c("Player", {
	contactTemp: "room",
	init: function() {
		this.addComponent("2D, Canvas, Color, Collision, Gravity, Twoway");
		this.twoway(10, 7);
		//this.gravity("Ground");
		this.bind("EnterFrame", function() {
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
