import {
  Typography,
  Steps,
  Icon,
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
            通过设置 Steps.Step 的 icon 属性，可以启用自定义图标。
          </Paragraph>
        </Typography>
        <Steps current={3} initial={2}>
          <Steps.Step title="step1" icon={<Icon type="setting" />} />
          <Steps.Step title="step2" icon={<Icon type="book" />} />
          <Steps.Step title="step3" icon={<Icon type="warning" />} />
          <Steps.Step title="step4" icon={<Icon type="book" />} />
        </Steps>
      </div>
    );
  }
}
export default Index;
