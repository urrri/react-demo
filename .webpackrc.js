const commonConfig = require('./shared.config');

export default {
  publicPath: `/`,
  alias: commonConfig.resolve.alias,
  define: {
    'process.env.server': 'http://localhost:3000'
  },
  env: {
    development: {
      extraBabelPlugins: [
        [
          'dva-hmr',
          {
            'container': '#root',
            'quiet': false
          }
        ]
      ]
    },
    // production: {
    //   publicPath:'/react-demo/dist/'
    // }
  }

};
