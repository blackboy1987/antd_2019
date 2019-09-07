import {
  Typography,
  DatePicker,
} from 'antd';
import moment from 'moment';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  disabledDate=currentDate => {
    return currentDate && currentDate < moment().endOf('day');
  };

  disabledTime=() => ({
      disabledHours: () => ([1, 2, 3, 4]),
      disabledMinutes: () => ([1, 2, 3, 4]),
      disabledSeconds: () => ([1, 2, 3, 4]),
    });

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。
          </Paragraph>
        </Typography>
        <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={this.disabledDate}
          disabledTime={this.disabledTime}
        />
        <br/>
        <br/>
        <DatePicker.MonthPicker disabledDate={this.disabledDate} placeholder="Select month" />
        <DatePicker.RangePicker
          disabledTime={this.disabledTime}
          disabledDate={this.disabledDate}
          showTime={{
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          }}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </div>
    );
  }
}
export default Index;
