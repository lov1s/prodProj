import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { type BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
export function buildPlugins({
    paths,
    isDev,
    apiUrl
}: BuildOptions): webpack.WebpackPluginInstance[] {
    // const handler = (percentage:number, message:string, ...args:string[]) => {
    //     // e.g. Output each progress message directly to the console:
    //     console.info(percentage, message, ...args);
    // };
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        // new webpack.ProgressPlugin(handler),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        new ReactRefreshWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),

    ];
    if(isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        // @ts-ignore
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }));
    }
    return plugins;
}
