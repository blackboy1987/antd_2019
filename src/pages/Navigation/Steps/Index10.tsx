import {
  Typography,
  Steps,
  Divider,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state = {
    current: 0,
  };

  onChange=(current:number) => {
    this.setState({
      current,
    });
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            设置 onChange 后，Steps 变为可点击状态。
          </Paragraph>
        </Typography>
        <div>
          <Steps labelPlacement="vertical" onChange={this.onChange} current={this.state.current}>
            <Steps.Step title="Step 1" description="This is a description." />
            <Steps.Step title="Step 2" description="This is a description." />
            <Steps.Step title="Step 3" description="This is a description." />
          </Steps>

          <Divider />

          <Steps onChange={this.onChange} current={this.state.current} direction="vertical">
            <Steps.Step title="Step 1" description="This is a description." />
            <Steps.Step title="Step 2" description="This is a description." />
            <Steps.Step title="Step 3" description="This is a description." />
          </Steps>
        </div>
      </div>
    );
  }
}
export default Index;
