import {
  Typography,
  Cascader,
  Icon,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

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

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  // eslint-disable-next-line max-len
  filter=(inputValue:string, path:any[]) => path.some(item => item.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            省市区级联。
          </Paragraph>
        </Typography>
        <Cascader
          options={options}
          showSearch={{ filter: (inputValue:string, path:any[]) => this.filter(inputValue, path) }}
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}
export default Index;
