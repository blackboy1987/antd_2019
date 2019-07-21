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
            也可以直接传 AutoComplete.Option 作为 AutoComplete 的 children，而非使用 dataSource。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
