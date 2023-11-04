export const EnvMap = {
  mock: 'mock',
  dev: 'dev',
  test: 'test',
  release: 'release',
  prod: 'prod',
};

export const EnvEnum = {
  '-1': EnvMap.mock,
  '0': EnvMap.dev,
  '1': EnvMap.test,
  '2': EnvMap.release,
  '3': EnvMap.prod,
};
export type EnvEnumType = keyof typeof EnvEnum;
