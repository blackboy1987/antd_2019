import {
  Typography,
  Button,
} from 'antd';

import React, { Component } from 'react';
const { Paragraph } = Typography;
class Button03 extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            可以将多个 Button 放入 Button.Group 的容器中。
            <br/>
            通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。
          </Paragraph>
        </Typography>
        <Button.Group>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
          <Button>button 4</Button>
        </Button.Group>
      </div>
    );
  }
}
export default Button03;
