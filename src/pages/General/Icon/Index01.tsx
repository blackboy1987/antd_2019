import {
  Typography,
  Icon,
} from 'antd';
import React, { Component } from 'react';

const { Paragraph } = Typography;

class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            使用标签声明组件，指定图标对应的 type 属性。可以通过 theme 属性来设置不同的主题风格的图标，也可以通过设置 spin 属性来实现动画旋转效果。
          </Paragraph>
        </Typography>
        <Icon type="home" />
        <Icon type="setting" theme="filled" />
        <Icon type="smile" theme="outlined" />
        <Icon type="sync" spin />
        <Icon type="smile" rotate={180} />
        <Icon type="loading" />
      </div>
    );
  }
}
export default Index;
