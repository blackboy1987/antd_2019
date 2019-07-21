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
            简单的竖直方向的小型步骤条。
          </Paragraph>
        </Typography>
        <Steps size="small" direction="vertical" current={1}>
          <Steps.Step title="Finished" description="This is a description." />
          <Steps.Step title="In Progress" description="This is a description." />
          <Steps.Step title="Waiting" description="This is a description." />
        </Steps>
      </div>
    );
  }
}
export default Index;
