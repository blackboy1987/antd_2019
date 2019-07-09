import {
  Typography,
} from 'antd';
import React, { Component } from 'react';


const { Paragraph } = Typography;

class Index extends Component {
  state={
    str: 'abcdefg',
  };

  onChange = (value:string) => {
    this.setState({
      str: value,
    });
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            可交互
          </Paragraph>
        </Typography>
        <Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
      </div>
    );
  }
}
export default Index;
