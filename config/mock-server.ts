import mockServer from '@liangskyli/mock';

export default (ctx: any) => {
  let isFirstWatch = true;
  ctx.onBuildFinish(async (opts: any) => {
    let needStart = !opts.isWatch || isFirstWatch;
    if (needStart) {
      await mockServer({ port: 9001 });
    }
    isFirstWatch = false;
  });
};
