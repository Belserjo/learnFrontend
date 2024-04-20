import path from 'path';
import { Configuration, RuleSetRule, DefinePlugin } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config!.resolve!.modules = [paths.src, 'node_modules'];
    config!.resolve!.extensions!.push('.ts', '.tsx');

    if (config.module!.rules) {
        // eslint-disable-next-line
        // @ts-ignore
        config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i }; // исключаем правило обработки свг
            }

            return rule;
        });
    }

    config.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module!.rules!.push(buildCssLoader(true));
    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
    }));
    return config;
};
