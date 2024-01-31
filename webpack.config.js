const path = require("path");
const PACKAGE = require("./package.json");
const version = PACKAGE.version;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    let config = {
        entry: path.resolve(__dirname, "./src/index.js"),
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /.(css|scss|sass)$/,
                    use: ["style-loader", "css-loader"],
                },
                /*{
                    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "assets/fonts",
                            },
                        },
                    ],
                },*/
                /* {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "assets/images",
                            },
                        },
                    ],
                },
                {
                    test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[path][name].[ext]",
                                outputPath: "assets/icons",
                            },
                        },
                    ],
                },*/
                {
                    test: /\.(png|jpe?g|gif|mkv)$/i,
                    type: "asset/inline",
                },
                {
                    test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
                    type: "asset/inline",
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                base: process.env.PUBLIC_URL,
                template: path.resolve("./public/index.html"),
                favicon: path.resolve("./public/favicon.ico"),
            }),
        ],
        resolve: {
            extensions: ["*", ".js", ".jsx"],
        },
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "./build"),
            filename: `games-collection-v${version}.js`,
        },
        devServer: {
            static: path.resolve(__dirname, "./public"),
            historyApiFallback: true,
        },
    };

    if (argv.mode === "development") {
        config.devtool = "source-map";
        config.output.publicPath = "/";
    }
    if (argv.mode === "production") {
        config.plugins.push();
    }

    return config;
};
