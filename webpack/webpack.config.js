
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
const merge = require("webpack-merge");
const HtmlPlugin = require("html-webpack-plugin");
const MonacoEditorPlugin = require("monaco-editor-webpack-plugin");

const baseConfig = require("./webpack.base");

const PROJECT_ROOT = join(__dirname, "..");
const SOURCE_ROOT = join(PROJECT_ROOT, "src");
const DIST_FOLDER = join(PROJECT_ROOT, "dist");

/**
 * @type Array<import('webpack').Configuration>
 */
module.exports = [
  merge(baseConfig, {
    name: "library",
    entry: join(SOURCE_ROOT, "lib/index.ts"),
    output: {
      filename: "lib.js",
      path: DIST_FOLDER,
      libraryTarget: "commonjs"
    }
  }),

  merge(baseConfig, {
    name: "app",
    entry: join(SOURCE_ROOT, "app/index.tsx"),
    output: {
      filename: "app.js",
      path: join(DIST_FOLDER, "app"),
      publicPath: "app/"
    },
    plugins: [
      new HtmlPlugin({
        template: join(SOURCE_ROOT, "app/index.html")
      }),
      new MonacoEditorPlugin({
        languages: [],
        features: []
      })
    ]
  }),

  merge(baseConfig, {
    name: "deno-cli",
    target: "web",
    entry: join(SOURCE_ROOT, "cli/deno/cli.ts"),
    output: {
      filename: "deno.js",
      path: join(DIST_FOLDER, "cli")
    }
  }),

  merge(baseConfig, {
    name: "node-cli",
    target: "node",
    entry: join(SOURCE_ROOT, "cli/node/cli.ts"),
    output: {
      filename: "node.js",
      path: join(DIST_FOLDER, "cli")
    }
  })
];
