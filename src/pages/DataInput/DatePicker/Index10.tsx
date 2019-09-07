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
            通过组合 mode 与 onPanelChange 控制要展示的面板。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
