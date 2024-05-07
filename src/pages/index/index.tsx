import logo from '@/assets/hook.png';
import { useAppDispatch, useAppSelector } from '@/store';
import { setEnvEnum } from '@/store/reducers/common.model';
import request, { createRequest } from '@/utils/request';
import { Button } from '@nutui/nutui-react-taro';
import { Image, Text, View } from '@tarojs/components';
import { useCallback } from 'react';
import { useEnv, useModal, useNavigationBar, useToast } from 'taro-hooks';
import styles from './index.module.less';

const Index = () => {
  const env = useEnv();
  const { setTitle } = useNavigationBar({ title: 'Taro Hooks' });
  const show = useModal({
    title: 'Taro Hooks!',
    showCancel: false,
    confirmColor: '#8c2de9',
    confirmText: '支持一下',
  });
  const { show: showToast } = useToast({ mask: true });

  const handleModal = useCallback(() => {
    show({ content: '不如给一个star⭐️!' }).then(() => {
      showToast({ title: '点击了支持!' });
    });
  }, [show, showToast]);

  const { envEnum } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  const handleRedux = () => {
    dispatch(setEnvEnum('-1'));
  };
  const getAjaxData = async () => {
    // 支付宝不能用localhost，改用127.0.0.1
    await request({ url: 'http://127.0.0.1:9001/api/get-list' })
      .then((result) => {
        console.log('result:', result);
      })
      .catch((err) => {
        console.log('err:', err);
      });
  };
  const getAjaxData2 = async () => {
    await createRequest({ url: 'http://127.0.0.1:9001/api/get-list' })
      .then((result) => {
        console.log('result:', result);
      })
      .catch((err) => {
        console.log('err:', err);
      });
  };

  return (
    <View className={styles.wrapper}>
      <Image className={styles.logo} src={logo} />
      <Text className={styles.title}>为Taro而设计的Hooks Library</Text>
      <Text className={styles.desc}>
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
      </Text>
      <View className={styles.list}>
        <Text className={styles.label}>运行环境</Text>
        <Text className={styles.note}>{env}</Text>
      </View>
      <Button
        className={styles.button}
        onClick={() => setTitle('Taro Hooks Nice!')}
      >
        设置标题
      </Button>
      <Button className={styles.button} onClick={handleModal}>
        使用Modal
      </Button>
      <View className={styles.list}>
        <Text className={styles.label}>redux数据</Text>
        <Text className="color-red">{envEnum}</Text>
      </View>
      <Button className={styles.button} onClick={handleRedux}>
        更新redux数据
      </Button>
      <Button type="primary" className={styles.button} onClick={getAjaxData}>
        NutUI React Button,request
      </Button>
      <Button type="primary" className={styles.button} onClick={getAjaxData2}>
        NutUI React Button,createRequest
      </Button>
    </View>
  );
};

export default Index;
