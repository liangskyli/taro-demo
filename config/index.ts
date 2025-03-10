import { defineConfig, type UserConfigExport } from '@tarojs/cli';
import { resolve } from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import devConfig from './dev';
import prodConfig from './prod';

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig<'webpack5'>(
  async (merge /*, { command, mode }*/) => {
    const baseConfig: UserConfigExport<'webpack5'> = {
      projectName: 'taro-demo',
      date: '2025-3-10',
      designWidth(input: any) {
        // 配置 NutUI 375 尺寸
        if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
          return 375;
        }
        // 全局使用 Taro 默认的 750 尺寸
        return 750;
      },
      deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
        375: 2,
      },
      sourceRoot: 'src',
      outputRoot: 'dist',
      plugins: ['@taro-hooks/plugin-react', '@tarojs/plugin-html'],
      defineConstants: {},
      alias: {
        '@': resolve(__dirname, '..', 'src'),
      },
      copy: {
        patterns: [],
        options: {},
      },
      framework: 'react',
      // compiler: 'webpack5',
      compiler: {
        type: 'webpack5',
        // 仅 webpack5 支持依赖预编译配置
        prebundle: {
          //enable: false,
          exclude: ['@nutui/nutui-react-taro', '@nutui/icons-react-taro'],
        },
      },
      cache: {
        enable: true, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
      },
      mini: {
        postcss: {
          pxtransform: {
            enable: true,
            config: {
              selectorBlackList: ['nut-'],
            },
          },
          url: {
            enable: true,
            config: {
              limit: 1024, // 设定转换尺寸上限
            },
          },
          cssModules: {
            enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
            config: {
              namingPattern: 'module', // 转换模式，取值为 global/module
              generateScopedName: '[name]__[local]___[hash:base64:5]',
            },
          },
        },
        webpackChain(chain) {
          chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
        },
      },
      h5: {
        publicPath: '/',
        staticDirectory: 'static',
        miniCssExtractPluginOption: {
          ignoreOrder: true,
          filename: 'css/[name].[hash].css',
          chunkFilename: 'css/[name].[chunkhash].css',
        },
        postcss: {
          pxtransform: {
            enable: true,
            config: {
              selectorBlackList: ['nut-'],
            },
          },
          autoprefixer: {
            enable: true,
            config: {},
          },
          cssModules: {
            enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
            config: {
              namingPattern: 'module', // 转换模式，取值为 global/module
              generateScopedName: '[name]__[local]___[hash:base64:5]',
            },
          },
        },
      },
      rn: {
        appName: 'taroDemo',
        postcss: {
          cssModules: {
            enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          },
        },
      },
    };
    if (process.env.NODE_ENV === 'development') {
      // 本地开发构建配置（不混淆压缩）
      return merge({}, baseConfig, devConfig);
    }
    // 生产构建配置（默认开启压缩混淆等）
    return merge({}, baseConfig, prodConfig);
  },
);
