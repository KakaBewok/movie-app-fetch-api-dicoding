const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 3000,
    liveReload: true,
  },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "bundle.js",
  //   assetModuleFilename: "img/[name][ext]",
  //   clean: true,
  // },
  plugins: [new MiniCssExtractPlugin()],
});
