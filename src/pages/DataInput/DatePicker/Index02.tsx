import {
  Typography,
  DatePicker,
} from 'antd';

import React, { Component } from 'react';
import moment from 'moment';

const { Paragraph } = Typography;

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            使用 format 属性，可以自定义日期显示格式。
          </Paragraph>
        </Typography>
        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        <br />
        <br />
        <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
        <br />
        <br />
        <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
        <br />
        <br />
        <RangePicker
          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat}
        />
      </div>
    );
  }
}
export default Index;
