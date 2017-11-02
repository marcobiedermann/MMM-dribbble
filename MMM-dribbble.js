Module.register("MMM-dribbble", {
	defaults: {
		api: {
			base: "https://api.dribbble.com/v1",
			clientAccessToken: null,
			endpoint: "shots",
			perPage: 24,
		},
		animationSpeed: 1000,
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

	getShots: function() {
		return new Promise((resolve, reject) => {
			const { api } = this.config;
			const url = `${api.base}/${api.endpoint}?access_token=${api.clientAccessToken}&per_page=${api.perPage}`;

			fetch(url)
				.then(response => response.json())
				.then(result => resolve(result))
				.catch(error => reject(error));
		});
	},

	update: function() {
		this.getShots().then(shots => {
			this.shots = shots;
			this.show(this.config.animationSpeed, { lockString: this.identifier} );
			this.loaded = true;
			this.updateDom(this.config.animationSpeed);
		});
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
