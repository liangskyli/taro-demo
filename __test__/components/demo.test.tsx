import Demo from '@/components/demo';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

// mock方法来模拟@tarojs/taro的 api
vi.mock('@tarojs/taro', () => {
  return {
    default: {
      showToast: (option) => {
        global.showToastOption = option;
      },
    },
  };
});

vi.mock('@nutui/nutui-react-taro', () => {
  return {
    Button: (props) => {
      return <button {...props}>{props.children}</button>;
    },
  };
});

describe('@/components/demo', () => {
  it('should render the Demo', () => {
    const wrapper = render(<Demo />);
    expect(wrapper.getByTestId('text').textContent).toBe('demo text');

    const consoleSpy = vi.spyOn(console, 'log');
    wrapper.getByTestId('text').click();
    expect(consoleSpy).toHaveBeenCalledWith('onClickText');
    expect(global.showToastOption).toEqual({ title: 'showToast' });
    consoleSpy.mockRestore();

    expect(wrapper.getByTestId('view').textContent).toBe('demo view');
    expect(wrapper.getByTestId('div').textContent).toBe('demo div');
    expect(wrapper.getByTestId('div')).toHaveClass('div-class');
    expect(wrapper.getByTestId('nutui-button').textContent).toBe(
      'demo nutui Button',
    );
  });
});
