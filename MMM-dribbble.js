Module.register("MMM-dribbble", {
	defaults: {
		base: "https://api.dribbble.com/v1",
		clientAccessToken: null,
		endpoint: "shots",
		perPage: 24,

		animationSpeed: 1000,
		initialLoadDelay: 1000 * 2.5,
		updateInterval: 1000 * 60 * 10,
	},

	getStyles: function() {
		return [
			"MMM-dribbble.css",
		];
	},

	getDom: function() {
		const wrapper = document.createElement("div");

		if (!this.loaded) {
			return wrapper;
		}

		const html = `
      <ul class="shots">
        ${this.shots.map(shot => `
          <li>
            <div class="shot">
              <figure class="shot__figure">
                <img src="${shot.images.teaser}" class="shot__image">
              </figure>
            </div>
          </li>
        `).join("")}
      </ul>
    `;

		wrapper.insertAdjacentHTML("afterbegin", html);

		return wrapper;
	},

	getShots: function() {
		return new Promise((resolve, reject) => {
			const { base, clientAccessToken, endpoint, perPage } = this.config;
			const url = `${base}/${endpoint}?access_token=${clientAccessToken}&per_page=${perPage}`;

			fetch(url)
				.then(response => response.json())
				.then(result => resolve(result))
				.catch(error => reject(error));
		});
	},

	update: function() {
		this.getShots().then(shots => {
			this.shots = shots;
			this.show(this.config.animationSpeed, { lockString: this.identifier } );
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
