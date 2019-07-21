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
            简单的步骤条。
          </Paragraph>
        </Typography>
        <Steps current={1}>
          <Steps.Step title="setp1" description="this is first step" />
          <Steps.Step title="setp2" description="this is second step" />
          <Steps.Step title="setp3" description="this is third step" />
        </Steps>
      </div>
    );
  }
}
export default Index;
