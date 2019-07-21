import {
  Typography,
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
            不区分大小写的 AutoComplete
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
