
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const prodConfig = require("./webpack.prod.config");

const devMode = process.argv.indexOf('-p') === -1;
let config = devMode ? devConfig : prodConfig;
module.exports = merge(baseConfig, config);