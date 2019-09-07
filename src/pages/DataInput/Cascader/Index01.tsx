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
  onChange= (value:[], selectedValues:[]) => {
    console.info(value, selectedValues);
  };

  onPopupVisibleChange=(value)=>{
    console.log(value);
  };

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
          onChange={this.onChange}
          onPopupVisibleChange={this.onPopupVisibleChange}
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}
export default Index;
