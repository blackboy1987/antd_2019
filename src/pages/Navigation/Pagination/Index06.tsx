import {
  Typography,
  Pagination,
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
            简单的翻页。
          </Paragraph>
        </Typography>
        <Pagination defaultCurrent={1} total={500} simple />
      </div>
    );
  }
}
export default Index;
