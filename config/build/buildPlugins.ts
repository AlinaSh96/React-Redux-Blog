import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlufin from 'mini-css-extract-plugin';
import { BuildOptins } from './types/config';

export function buildPlugins({paths}: BuildOptins): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlufin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ];
}