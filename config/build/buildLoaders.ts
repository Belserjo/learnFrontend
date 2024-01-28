import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions):webpack.RuleSetRule[]{
    //Если не использовать тайпскрипт, то для работы с реакт нужен babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',//какой лоадер используем
        exclude: /node_modules/, //что исключаем для проверки
    }

    const cssLoader =   {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath:string) => Boolean(resPath.includes('.module.scss')),
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]'},

                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };
        return [
            typeScriptLoader,
            cssLoader,

    ]
}