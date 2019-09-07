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
  onChange= (value: [], selectedValues: []) => {
    console.log(value, selectedValues);
  };

  displayRender= (label:[]) => {
    console.log(label);
    return label[label.length - 1];
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            通过移入展开下级菜单，点击完成选择。
          </Paragraph>
        </Typography>
        <Cascader
          options={options}
          expandTrigger="hover"
          displayRender={this.displayRender}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default Index;
