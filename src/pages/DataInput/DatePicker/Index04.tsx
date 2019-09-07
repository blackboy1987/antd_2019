import {
  Typography,
  DatePicker,
} from 'antd';

import React, { Component } from 'react';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;

function onChange(value, dateString:string) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            增加选择时间功能，当 showTime 为一个对象时，其属性会传递给内建的 TimePicker。
          </Paragraph>
        </Typography>
        <DatePicker showTime placeholder="Select Time" onChange={onChange} onOk={onOk} />
        <br />
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          placeholder={['Start Time', 'End Time']}
          onChange={onChange}
          onOk={onOk}
        />
      </div>
    );
  }
}
export default Index;
