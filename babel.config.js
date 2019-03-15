
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

module.exports = api => {
  api.cache(true);

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-typescript",
      "@babel/preset-react"
    ],
    plugins: ["@babel/plugin-syntax-dynamic-import"]
  };
};
