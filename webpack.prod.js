const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    // assetModuleFilename: "img/[name]-[hash][ext]",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.[contenthash].css",
    }),
  ],
});
