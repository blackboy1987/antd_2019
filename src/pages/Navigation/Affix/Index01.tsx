import {
  Typography,
  Affix,
  Button,
} from 'antd';

import React, { Component } from 'react';

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state={
    offsetTop: 20,
    bottom: 10,
  };

  render() {
    const { offsetTop } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            最简单的用法。
          </Paragraph>
        </Typography>
        <Affix offsetTop={offsetTop}>
          <Button>haha</Button>
        </Affix>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Affix offsetBottom={this.state.bottom}>
          <Button
            type="primary"
            onClick={() => {
              const root = this;
              root.setState({
                bottom: root.state.bottom + 10,
              });
            }}
          >
            Affix bottom
          </Button>
        </Affix>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default Index;
