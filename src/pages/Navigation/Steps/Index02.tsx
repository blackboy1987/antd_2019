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
            迷你版的步骤条，通过设置 {'<Steps size="small">'} 启用.
          </Paragraph>
        </Typography>
        <Steps size="small" current={1}>
          <Steps.Step title="setp1" description="this is first step" />
          <Steps.Step title="setp2" description="this is second step" />
          <Steps.Step title="setp3" description="this is third step" />
        </Steps>
      </div>
    );
  }
}
export default Index;
