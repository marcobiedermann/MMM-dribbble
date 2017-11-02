Module.register("MMM-dribbble", {
	defaults: {

	},

	getStyles: function() {
		return [

		];
	},

	getDom: function() {
		const wrapper = document.createElement("div");

		return wrapper;
	},

	start: function() {
		Log.info(`Starting module: ${this.name}`);
	}
});
