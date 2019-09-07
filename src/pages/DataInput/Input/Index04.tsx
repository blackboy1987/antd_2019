import {
  Typography,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            输入框的组合展现。

            注意：使用 compact 模式时，不需要通过 Col 来控制宽度。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
