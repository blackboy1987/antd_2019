import {
  Typography,
  Steps,
  Button,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state={
    current: 0,
  };

  next=() => {
    const { current } = this.state;
    let newCurrent = current;
    if (newCurrent >= 2) {
      newCurrent = 2;
    } else {
      newCurrent += 1;
    }
    this.setState({
      current: newCurrent,
    });
  };

  previous=() => {
    const { current } = this.state;
    let newCurrent = current;
    if (newCurrent <= 0) {
      newCurrent = 0;
    } else {
      newCurrent -= 1;
    }
    this.setState({
      current: newCurrent,
    });
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            通常配合内容及按钮使用，表示一个流程的处理进度。
          </Paragraph>
        </Typography>
        <Steps current={this.state.current}>
          <Steps.Step key="first" title="first"/>
          <Steps.Step key="scond" title="second" />
          <Steps.Step key="last" title="last" />
        </Steps>
        <div>
          {this.state.current}
        </div>
        <Button disabled={this.state.current === 2} onClick={this.next}>{ this.state.current === 2 ? 'Done' : 'next' }</Button>
        <Button disabled={this.state.current === 0} onClick={this.previous}>Previous</Button>


      </div>
    );
  }
}
export default Index;
