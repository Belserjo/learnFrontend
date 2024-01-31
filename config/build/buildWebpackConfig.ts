import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildDevServer } from './buildDevServer';

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js', // чтобы имя не было всегда одинаковым, т.к. браузер кеширует файлы, обновленная инфа может не появиться, а так каждый раз будет новое имя
            path: paths.build,
            clean: true, // автоматически очищает папку билд при каждой сборке
        },
        plugins: buildPlugins(options),
        module: {
            rules:
                buildLoaders(options),

        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? BuildDevServer(options) : undefined,
    };
}
