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
            可以通过设置 theme 属性为 twoTone 来渲染双色图标，并且可以设置主题色。
          </Paragraph>
        </Typography>
        <Icon type="smile" theme="twoTone" />
        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      </div>
    );
  }
}
export default Index;
