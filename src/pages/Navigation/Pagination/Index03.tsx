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
            改变每页显示条目数。
          </Paragraph>
        </Typography>
        <Pagination defaultPageSize={50} defaultCurrent={1} total={500} showSizeChanger pageSizeOptions={['9', '50', '80', '100', '200', '500']} />
        <Pagination disabled defaultPageSize={50} defaultCurrent={1} total={500} showSizeChanger pageSizeOptions={['9', '50', '80', '100', '200', '500']} />

      </div>
    );
  }
}
export default Index;
