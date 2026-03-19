import type { IPluginContext } from '@tarojs/service';

export default (ctx: IPluginContext) => {
  let isFirstWatch = true;
  ctx.onBuildFinish(async (opts) => {
    let needStart = !opts.isWatch || isFirstWatch;
    if (needStart) {
      const { default: mockServer } = await import('@liangskyli/mock');
      await mockServer({ port: 9001 });
    }
    isFirstWatch = false;
  });
};
