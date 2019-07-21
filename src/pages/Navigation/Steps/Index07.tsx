import {
  Typography,
  Steps,
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
            使用 Steps 的 status 属性来指定当前步骤的状态。
          </Paragraph>
        </Typography>
        <Steps current={1} status="error">
          <Steps.Step title="Finished" description="This is a description" status="error" />
          <Steps.Step title="In Process" description="This is a description" status="finish" />
          <Steps.Step title="Waiting" description="This is a description" />
        </Steps>
      </div>
    );
  }
}
export default Index;
