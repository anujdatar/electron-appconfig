# electron-appconfig

Module for persistant configuration storage for electron apps. Basically a clone of [`electron-store`](https://github.com/sindresorhus/electron-store) but uses [`@anujdatar/appconfig`](https://github.com/anujdatar/appconfig) instead of [`conf`](https://github.com/sindresorhus/conf). Because of [`write-file-atomic`](https://github.com/npm/write-file-atomic) issues with chown permission error and Snaps under strict confinement.

## Usage

Install package

```bash
npm i @anujdatar/electron-appconfig
```

For beta package, if a newer test version exists

```bash
npm i @anujdatar/electron-appconfig@next
```

```js
const appConfig = require('@anujdatar/electron-appconfig')

appConfig.set(key, value) // adds { key: value } to the store

appConfig.get(key) // returns value

appConfig.delete(key) // removes { key: value } from store
```

## Contributing

use `npm run build` to compile `index.js` in `src` folder. Output in `lib` folder.
[Issues](https://github.com/anujdatar/electron-appconfig/issues)

## Related

[`appconfig`](https://github.com/anujdatar/appconfig) persistent app config storage for node apps

## License

[MIT](https://github.com/anujdatar/electron-appconfig/blob/master/LICENSE) Copyright (c) 2019 Anuj Datar
