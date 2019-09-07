import {
  Typography,
  DatePicker,
  Radio,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e:Event) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            三种大小的输入框，若不设置，则为 default。
          </Paragraph>
        </Typography>
        <div>
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <br />
          <br />
          <DatePicker size={size} />
          <br />
          <br />
          <MonthPicker size={size} placeholder="Select Month" />
          <br />
          <br />
          <RangePicker size={size} />
          <br />
          <br />
          <WeekPicker size={size} placeholder="Select Week" />
        </div>
      </div>
    );
  }
}
export default Index;
