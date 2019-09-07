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
    disabled: true,
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
  onChange= (value:string[]) => {
    console.log(value);
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            通过指定 options 里的 disabled 字段。
          </Paragraph>
        </Typography>
        <Cascader options={options} onChange={this.onChange} />
      </div>
    );
  }
}
export default Index;
