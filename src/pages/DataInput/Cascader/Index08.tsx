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
            code: 752100,
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
            code: 453400,
          },
        ],
      },
    ],
  },
];

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  onClick= (e:Event) => {
    e.stopPropagation();
  };

  displayRender= (label:any[], selectedOption:any[]) => {
    return selectedOption.map((item, index) => {
          if (index === selectedOption.length - 1) {
            return (
              <span key={item.value}>
                {item.label} (<a onClick={(e) => this.onClick(e)}>{item.code}</a>)
              </span>
            );
          }
          return (
            <span key={item.value}>
              {item.label}
            </span>
          );
    });
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            通过指定 options 里的 disabled 字段。
          </Paragraph>
        </Typography>
        <Cascader style={{ width: '100%' }} displayRender={this.displayRender} options={options} />
      </div>
    );
  }
}
export default Index;
