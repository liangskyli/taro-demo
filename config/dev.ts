import type { UserConfigExport } from '@tarojs/cli';
import path from 'path';

export default {
  env: {
    NODE_ENV: '"development"',
  },
  plugins: [path.resolve(__dirname, './mock-server.ts')],
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {
    // @ts-ignore
    hot: true,
  },
  h5: {},
} satisfies UserConfigExport<'webpack5'>;
