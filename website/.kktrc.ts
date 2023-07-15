import path from 'path';
import webpack from 'webpack';
import { LoaderConfOptions, WebpackConfiguration } from 'kkt';
import scopePluginOptions from '@kkt/scope-plugin-options';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import pkg from './package.json';

export default (conf: WebpackConfiguration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = mdCodeModulesLoader(conf);
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [path.resolve(process.cwd(), 'README.md'), path.resolve(process.cwd(), 'src')],
  });

  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );

  /** https://github.com/uiwjs/react-code-preview/issues/94 */
  conf.module!.exprContextCritical = false;
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
          refractor: {
            test: /[\\/]node_modules[\\/](refractor)[\\/]/,
            name: 'refractor-prismjs-vendor',
            chunks: 'all',
          },
          codemirror: {
            name: 'codemirror-vendors',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@codemirror)[\\/]/,
            priority: -2,
          },
          babel_standalone: {
            name: 'standalone-vendors',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@babel\/standalone)[\\/]/,
            priority: -2,
          },
          babel_vendors: {
            name: 'babel_vendors',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@babel)[\\/]/,
          },
          prismjs: {
            test: /[\\/]node_modules[\\/](prismjs)[\\/]/,
            name: 'prismjs-vendor',
            chunks: 'all',
          },
        },
      },
    };
  }

  return conf;
};
