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
            使用 setFieldsValue 来动态设置其他控件的值。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
