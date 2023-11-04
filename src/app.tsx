import store from '@/store';
import { Provider } from 'react-redux';
import './app.less';

const App = (props: any) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default App;
