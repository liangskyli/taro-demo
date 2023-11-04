import path from 'path';

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  plugins: [path.resolve(__dirname, './mock-server.ts')],
  mini: {
    hot: true,
  },
  h5: {},
};
