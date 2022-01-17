import path from 'path';
import { Configuration } from 'webpack';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import { LoaderConfOptions } from 'kkt';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  conf = rawModules(conf, env, options);
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [path.resolve(process.cwd(), 'README.md'), path.resolve(process.cwd(), 'src')],
  });

  if (env === 'production') {
    /** https://github.com/uiwjs/react-code-preview/issues/94 */
    conf.module!.exprContextCritical = false;
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
