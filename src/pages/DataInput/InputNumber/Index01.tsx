import {
  Typography,
  InputNumber,
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
            数字输入框。
          </Paragraph>
        </Typography>
        <InputNumber
          min={10}
          max={100}
          step={15}
          defaultValue={100}
          style={{ width: '100%' }}
          formatter={value => `$ ${value}`}
          onChange={(value) => console.log(value)}
          precision={2}
        />
      </div>
    );
  }
}
export default Index;
