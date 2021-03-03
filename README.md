# umi-plugin-ftp

[![NPM version](https://img.shields.io/npm/v/umi-plugin-ftp.svg?style=flat)](https://npmjs.org/package/umi-plugin-ftp)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-ftp.svg?style=flat)](https://npmjs.org/package/umi-plugin-ftp)

umi生产构建完成后自动上传到远程服务器（注意：需要服务端配置ftp被动模式）

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## 调试
```
npm run build
npm run build:app
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-ftp'],
  ],
  ftp: {
    user: "ftpuser03",
    // Password optional, prompted if none given
    // 远程服务给个ftp专用账户，降低风险或者不填，手动输入
    // password: "password",
    host: "47.99.156.0",
    port: 21,
    // 默认dist目录
    // localRoot: path.resolve(process.cwd()) + '/dist',
    remoteRoot: '/pub',
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ['*', '**/*'],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: false,
    // use sftp or ftp
    sftp: false
  }
}
```

## Options
同[ftp-deploy](https://www.npmjs.com/package/ftp-deploy)
```
export type FtpOptions = {
  user: string,
  // Password optional, prompted if none given
  password?: string,
  host: string,
  port: number,
  localRoot?: string,
  remoteRoot: string,
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include?: string[],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude?: string[],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote?: boolean,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv?: boolean,
  // use sftp or ftp
  sftp?: boolean
}
```

TODO

## LICENSE

MIT
