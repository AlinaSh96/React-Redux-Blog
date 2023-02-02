import { BuildOptins } from "./types/config";
import webpack from 'webpack';
import path from 'path';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptins): webpack.Configuration {
    const {paths, mode, port, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry ,
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        plugins: buildPlugins(options),
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolves(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer:  isDev ? buildDevServer(options) : undefined,
      };

}