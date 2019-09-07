import {
  Typography,
  DatePicker,
} from 'antd';
import moment from 'moment';

import React, { Component } from 'react';


const { Paragraph } = Typography;
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            选择框的不可用状态。
          </Paragraph>
        </Typography>
        <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
        <br />
        <br />
        <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
        <br />
        <br />
        <RangePicker
          defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
          disabled
        />
      </div>
    );
  }
}
export default Index;
