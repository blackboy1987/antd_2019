import {
  Typography,
  Button,
} from 'antd';

import React, { Component } from 'react';

const { Paragraph } = Typography;
class Button03 extends Component {
  state={
    loading: false,
    delay: 5,
  };

  loading=() => {
    let times = 5;
    this.setState({
      loading: true,
      delay: times,
    });



    const timer = setInterval(() => {
      if (times <= 0) {
        this.setState({ loading: false });
        clearInterval(timer);
      }
      this.setState({ delay: times });
      times -= 1;
    }, 1000);
  };

  render() {
    const { loading, delay } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
          </Paragraph>
        </Typography>
        <Button type="primary" loading>Loading</Button>
        <Button type="primary" size="small" loading>Loading</Button>
        <Button type="primary" loading={loading} onClick={this.loading}>click Me {delay}</Button>
        <Button type="primary" size="small" loading={{ delay: 1000 * 10 }}>click Me</Button>
        <Button type="primary" loading shape="circle" />
        <Button type="primary" size="small" loading shape="circle" />
      </div>
    );
  }
}
export default Button03;
