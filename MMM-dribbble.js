Module.register("MMM-dribbble", {
	defaults: {
		initialLoadDelay: 1000 * 2.5,
		updateInterval: 1000 * 60 * 10
	},

	getStyles: function() {
		return [

		];
	},

	getDom: function() {
		const wrapper = document.createElement("div");

		return wrapper;
	},

	update: function() {

	},

	scheduleUpdate: function(delay) {
		let nextLoad = this.config.updateInterval;

		if (typeof delay !== "undefined" && delay >= 0) {
			nextLoad = delay;
		}

		clearTimeout(this.updateTimer);
		this.updateTimer = setTimeout(() => {
			this.update();
		}, nextLoad);
	},

	start: function() {
		Log.info(`Starting module: ${this.name}`);

		this.loaded = false;
		this.scheduleUpdate(this.config.initialLoadDelay);

		this.updateTimer = null;
	}
});
