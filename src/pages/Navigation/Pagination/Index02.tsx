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
            更多分页。
          </Paragraph>
        </Typography>
        <Pagination defaultCurrent={49} total={500} />
      </div>
    );
  }
}
export default Index;
