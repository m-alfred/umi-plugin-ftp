# umi-plugin-ftp

[![NPM version](https://img.shields.io/npm/v/umi-plugin-ftp.svg?style=flat)](https://npmjs.org/package/umi-plugin-ftp)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-ftp.svg?style=flat)](https://npmjs.org/package/umi-plugin-ftp)

umi生产构建完成后自动上传到远程服务器（注意：需要服务端配置ftp被动模式）

## 调试
```
npm run build
npm run build:app
```

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-ftp'],
  ],
}
```

## Options

TODO

## LICENSE

MIT
