// aditional setup for antd-mobile reference: ref:
// https://ant.design/docs/react/use-with-create-react-app

const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
  config = injectBabelPlugin([
    'import', {
      libraryName: 'antd-mobile',
      style: 'css'
    }
  ], config);
  return config;
};