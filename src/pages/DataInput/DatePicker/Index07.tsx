import {
  Typography,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            当 RangePicker 无法满足业务需求时，可以使用两个 DatePicker 实现类似的功能。

            通过设置 disabledDate 方法，来约束开始和结束日期。

            通过 open onOpenChange 来优化交互。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
