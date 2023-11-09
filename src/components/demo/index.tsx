import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';

const Demo = () => {
  const onClickText = () => {
    console.log('onClickText');
    Taro.showToast({ title: 'showToast' });
  };
  return (
    <div>
      <Text data-testid="text" maxLines={2} onClick={onClickText}>
        demo text
      </Text>
      <View data-testid="view">demo view</View>
      <div data-testid="div" className="div-class">
        demo div
      </div>
      <Button data-testid="nutui-button" type="primary">
        demo nutui Button
      </Button>
    </div>
  );
};

export default Demo;
