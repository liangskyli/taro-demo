import type { SerializedError } from '@liangskyli/taro-request';
import { taroCreateRequest, taroRequest } from '@liangskyli/taro-request';
import Taro from '@tarojs/taro';

export type HttpJson<T = any> = {
  retCode: string;
  retMsg: string;
  data: T;
};

const createRequest = taroCreateRequest<Taro.request.Option, HttpJson>({});
const request = taroRequest<HttpJson>({
  loadingMiddlewareConfig: {
    showLoading: () => Taro.showLoading({ title: '加载中...', mask: true }),
    hideLoading: () => Taro.hideLoading(),
  },
  ShowErrorMiddlewareConfig: {
    showError: (err: SerializedError<'retCode', 'retMsg'>) => {
      console.log('showError:', err);
      Taro.showToast({ title: err.retMsg, icon: 'none' });
    },
    handleError: (err) => {
      console.log('handleError', err);
    },
  },
});
export { createRequest };
export default request;
