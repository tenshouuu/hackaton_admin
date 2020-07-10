const CracoLessPlugin = require('craco-less');
const { tokens } = require('./src/helpers/theme');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': tokens.palette.primary },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
