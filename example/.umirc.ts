import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [require.resolve('../lib')],
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
});
