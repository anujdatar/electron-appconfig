# electron-appconfig

Node module to save app configuration files in the home folder. This module is based on [`electron-store`](https://github.com/sindresorhus/electron-store) but avoids use of [`write-file-atomic`](https://github.com/npm/write-file-atomic) and [`make-dir`](https://github.com/sindresorhus/make-dir). Because of issues with chown permission error with Snaps.

## Usage

This is still in beta

```bash
npm install @anujdatar/electron-appconfig@next
```
