import { defineConfig } from '@tarojs/cli';
import path from 'path';

module.exports = defineConfig({
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  plugins: [path.resolve(__dirname, './mock-server.ts')],
  mini: {
    // @ts-ignore
    hot: true,
  },
  h5: {},
});
