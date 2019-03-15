
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

// @ts-check

const { join } = require("path");

const PROJECT_ROOT = join(__dirname, "..");
const SOURCE_ROOT = join(PROJECT_ROOT, "src");

/**
 * @type import('webpack').Configuration
 */
const config = {
  mode: "development",
  target: "web",
  context: SOURCE_ROOT,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      "@cli": join(SOURCE_ROOT, "cli"),
      "@lib": join(SOURCE_ROOT, "lib")
    }
  }
};

module.exports = config;
