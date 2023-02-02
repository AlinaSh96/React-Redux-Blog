import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { web } from 'webpack';
import { BuildOptins } from './types/config';

export function buildLoaders({isDev}: BuildOptins): webpack.RuleSetRule[] {
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader:  "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev 
                        ? '[path][name]__[local]--[hash:base64:5]' 
                        : '[hash:base64:8]'
                    }
                }
            },
            "sass-loader",
        ],
    }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        typeScriptLoader, 
         cssLoaders
    ]
}