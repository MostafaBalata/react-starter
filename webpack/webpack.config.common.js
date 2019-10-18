const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const paths = require("./paths");

module.exports = {
    entry: ['./src/app.tsx'],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    output: {
        path: paths.dist,
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.appHtml,
            // favicon: paths.favicon,  // TODO: set favicon up.
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    ],
};
