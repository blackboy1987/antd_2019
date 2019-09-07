import {
  Typography,
  Cascader,
} from 'antd';

import React, { Component } from 'react';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  onChange= (value:[]) => {
    console.log(value);
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            默认值通过数组的方式指定。
          </Paragraph>
        </Typography>
        <Cascader
          defaultValue={['zhejiang', 'hangzhou', 'xihu']}
          options={options}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default Index;
