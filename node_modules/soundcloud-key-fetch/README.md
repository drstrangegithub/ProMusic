# [soundcloud-key-fetch](https://www.npmjs.com/package/soundcloud-key-fetch) — *[GitLab](https://gitlab.com/syqwq/soundcloud-key-fetch)*
A simple module to fetch a SoundCloud API key without owning an application, requiring no dependencies!
```
npm i soundcloud-key-fetch
```
or 
```
yarn add soundcloud-key-fetch
```
---
## API
### sckey.fetchKey()
- Returns a string of an API token that was scraped from SoundCloud. ***Note:*** *This token contains no extra special privileges in the API, such as SoundCloud GO access; the token only provides the same amount of access as a user listening to SoundCloud without an account has.*

### sckey.testKey(key)
- Returns a boolean on whether or not the given key is valid. This function tests a given key against a SoundCloud API endpoint, and will verify it based on the response code given by the server. It will return "true" if the server responds with 404 or 200, "false" if the server responds with 401 or 403.

## Usage
#### Fetching a SoundCloud key
```javascript
const sckey = require('soundcloud-key-fetch');

sckey.fetchKey().then(key => {
    console.log(key)
});

// the function initially returns a promise, so you can either use the example above *or* you can call "await" like the example below.

const key = await sckey.fetchKey();
```

#### Testing a SoundCloud key
```javascript
const sckey = require('soundcloud-key-fetch');
	
sckey.testKey('SC-KEY').then(result => {
	// returns a boolean; true/false
	if(result) {
		console.log('The key works!')
	} else {
		console.log('The key didn\'t work.')
	}
});

// the function initially returns a promise, so you can either use the example above *or* you can call "await" like the example below.

const test = await sckey.testKey('SC-KEY');
```

huge thank you to [Zack Radisic](https://github.com/zackradisic/) for helping me out a ton w this package