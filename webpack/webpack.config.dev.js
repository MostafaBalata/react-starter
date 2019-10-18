const merge = require("webpack-merge");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const configCommon = require("./webpack.config.common");
const paths = require("./paths");

module.exports = merge(configCommon, {
  mode: "development",
  devServer: {
    contentBase: paths.dist,
    host: "localhost",
    port: 8080,
    https: false,
    hot: true,
    overlay: true,
    historyApiFallback: true,
    headers: {
    },
  },
  entry: ["react-hot-loader/patch"],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({ tsconfig: "tsconfig.dev.json" }),
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.scss$/,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: "[name]__[local]___[hash:base64:5]",
                  camelCase: "dashesOnly",
                },
              },
              { loader: "sass-loader" },
            ],
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: false,
                  localIdentName: "[name]__[local]___[hash:base64:5]",
                  camelCase: "dashesOnly",
                },
              },
            ],
          },
          {
            test: /\.(tsx?)$/,
            use: [
              {
                loader: "ts-loader",
                options: {
                  configFile: "tsconfig.dev.json",
                  transpileOnly: true,
                  experimentalWatchApi: true,
                },
              },
            ],
            include: paths.app,
          }
        ],
      },
    ],
  },
});
