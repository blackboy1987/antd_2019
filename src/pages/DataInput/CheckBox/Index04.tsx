import {
  Typography,
  Checkbox,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            方便的从数组生成 Checkbox 组。
          </Paragraph>
        </Typography>
        <Checkbox.Group options={plainOptions} />
        <br/>
        <br/>
        <Checkbox.Group options={options} />
        <br/>
        <br/>
        <Checkbox.Group
          options={optionsWithDisabled}
        />
      </div>
    );
  }
}
export default Index;
