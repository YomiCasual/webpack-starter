const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');



module.exports  = (env) => {


      const envConfig = require(`./webpack.development.js`);
      const config = merge(commonConfig, envConfig);
      return config;

}