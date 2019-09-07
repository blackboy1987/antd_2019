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
  state={
    text: 'Unselect',
  };

  onChange= (value: [], selectedValues: []) => {
    this.setState({
      text: selectedValues.map(item => item.label).join(','),
    });
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            切换按钮和结果分开。
          </Paragraph>
        </Typography>
        {this.state.text}
        <br/>
        <br/>
        <Cascader
          options={options}
          onChange={this.onChange}
        >
          <span>Change city</span>
        </Cascader>
      </div>
    );
  }
}
export default Index;
