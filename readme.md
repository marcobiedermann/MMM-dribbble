# MagicMirror² Module: MMM-dribbble

Dribbble - Show and tell for designers.

![MMM-dribbble](media/MMM-dribbble.png)

## Table of contents

* [Installation](#installation)
* [Configuration](#configuration)
* [dribbble API](#dribbble-api)
* [License](#license)

## Installation

1. Download `MMM-dribbble` module
1. Place `MMM-dribbble` folder into `MagicMirror/modules` folder
1. Add `MMM-dribbble` module to modules in `MagicMirror/config/config.js`

`MagicMirror/config/config.js`

```js
modules: [
	{
		module: "MMM-dribbble",
		position: "lower_third",
		config: {

		}
	},
],
```

## Configuration

Key | Description | Default | Type
--- | --- | --- | ---
base | dribbble API base url | https://api.dribbble.com/v1 | String
clientAccessToken | dribbble API client access token | null | String
endpoint | dribbble API shots endpoint | shots | String
perPage | shots to show | 24 | Integer (min: 0, max: 100)
animationSpeed | Animation speed to show content (in ms) | 1 s | Integer
initialLoadDelay | Delay until shots are initially fetched (in ms) | 2.5 s | Integer
updateInterval | Interval in which shots are updated (in ms) | 10 min | Integer

```js
base: "https://api.dribbble.com/v1",
clientAccessToken: null,
endpoint: "shots",
perPage: 24,
animationSpeed: 1000,
initialLoadDelay: 1000 * 2.5,
updateInterval: 1000 * 60 * 10,
```

## dribbble API

1. Head over to the [dribbble developer API](http://developer.dribbble.com/) and register an application.

![dribbble Developer API](media/01-developer.dribbble.com.png)

2. Create a new dribbble application. You can put in any information you like to.

![create dribbble new application](media/02-dribbble.com_account_applications_new.png)

3. Copy your **Client Access Token**.

![dribbble application information](media/03-dribbble.com_account_applications.png)

## License

[MIT License](LICENSE)

Copyright (c) 2017 Marco Biedermann
