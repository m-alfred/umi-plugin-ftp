// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';
import FtpDeploy from 'ftp-deploy';

const ftpDeploy = new FtpDeploy();

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

export default function UmiPluginFtp(api: IApi, ftpOptions: FtpOptions) {
  api.logger.info('use UmiPluginFtp');
  const {
    paths: {
      absOutputPath
    }
  } = api;

  const defaultOptions = {
    localRoot: absOutputPath,
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
  
  // 注册阶段执行，用于描述插件或插件集的 id、key、配置信息、启用方式等。
  api.describe({
    key: 'ftp',
    config: {
      schema(joi) {        
        return joi.object({
          user: joi.string().required(),
          // Password optional, prompted if none given
          password: joi.string(),
          host: joi.string().required(),
          port: joi.number().required(),
          localRoot: joi.string(),
          remoteRoot: joi.string().required(),
          // include: ["*", "**/*"],      // this would upload everything except dot files
          include: joi.array().items(joi.string()),
          // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
          exclude: joi.array().items(joi.string()),
          // delete ALL existing files at destination before uploading, if true
          deleteRemote: joi.boolean(),
          // Passive mode is forced (EPSV command is not sent)
          forcePasv: joi.boolean(),
          // use sftp or ftp
          sftp: joi.boolean()
      });
      },
      onChange: api.ConfigChangeType.regenerateTmpFiles,
    },
    enableBy: api.EnableBy.config,
  });

  const options = { ...defaultOptions, ...(ftpOptions || api.userConfig.ftp) };
  api.onBuildComplete(() => {    
    // 构建完成后ftp上传
    ftpDeploy
      .deploy(options)
      .then((res: any) => console.log("ftp upload finished:", res))
      .catch((err: any) => console.log(err));
  })
}
