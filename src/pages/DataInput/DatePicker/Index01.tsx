import {
  Typography,
  DatePicker,
  Icon,
} from 'antd';
import moment from 'moment';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            最简单的用法，在浮层中可以选择或者输入日期。
          </Paragraph>
        </Typography>
        <DatePicker
          dropdownClassName="yunxiaocha"
          format="YYYY-MM HH:mm:ss"
          showTime
          showToday={false}
          defaultPickerValue={moment().add(30, 'days')}
          suffixIcon={<Icon type="setting" />}
          allowClear={false}
        />
        <br/>
        <br/>
        <DatePicker.MonthPicker autoFocus />
        <br/>
        <br/>
        <DatePicker.RangePicker separator="to" />
        <br/>
        <br/>
        <DatePicker.WeekPicker />
      </div>
    );
  }
}
export default Index;
