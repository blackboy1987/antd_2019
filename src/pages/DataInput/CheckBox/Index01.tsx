import {
  Typography,
  Checkbox,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  onChange=(e:Event) => {
    console.log(e.target.checked);
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            简单的 checkbox。
          </Paragraph>
        </Typography>
        <Checkbox
          autoFocus
          onChange={this.onChange}
        >check box</Checkbox>
      </div>
    );
  }
}
export default Index;
