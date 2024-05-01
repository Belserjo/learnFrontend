import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    // Если не использовать тайпскрипт, то для работы с реакт нужен babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader', // какой лоадер используем
        exclude: /node_modules/, // что исключаем для проверки
    };

    const cssLoader = buildCssLoader(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = buildBabelLoader(options);

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        cssLoader,
    ];
}
