import { taroCreateRequest, taroRequest } from '@liangskyli/taro-request';
import Taro from '@tarojs/taro';

export type HttpJson<T = any> = {
  retCode: string;
  retMsg: string;
  data: T;
};

const createRequest = taroCreateRequest<
  (config: Taro.request.Option) => Promise<HttpJson>
>({});
const request = taroRequest<HttpJson, 'retCode', 'retMsg', 'data', string>({
  loadingMiddlewareConfig: {
    showLoading: () => Taro.showLoading({ title: '加载中...', mask: true }),
    hideLoading: () => Taro.hideLoading(),
  },
  ShowErrorMiddlewareConfig: {
    showError: (err) => {
      console.log('showError:', err);
      Taro.showToast({ title: err.retMsg, icon: 'none' });
    },
    handleError: (err) => {
      console.log('handleError', err);
    },
  },
  // 支付宝小程序接口请求码配置
  taroSerializedErrorMiddlewareConfig: {
    responseCodeKey: [
      'retCode',
      'code',
      'status',
      'statusCode',
      // 支付宝
      'error',
    ],
    responseMessageKey: [
      'retMsg',
      'message',
      'statusText',
      'errMsg',
      // 支付宝
      'errorMessage',
    ],
    messageMap: {
      // 支付宝
      ['Error: Request failed with status 0']: '网络错误，请检查网络配置',
      ['超时']: '网络超时，请稍后再试',
    },
  },
});
export { createRequest };
export default request;
