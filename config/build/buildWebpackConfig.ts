import { type BuildOptions } from "./types/config";
import type webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        // Используем path.resolve чтобы при смене ОС пути работали коректно
        entry: paths.entry,
        output: {
            // Главный файл сборки нашего приложения и генерация различных названий чтобы в браузере обновился скрип, а не брал с кэша
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
