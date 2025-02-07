/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1736920408482_2081";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置csrf拦截
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".nj": "nunjucks",
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
