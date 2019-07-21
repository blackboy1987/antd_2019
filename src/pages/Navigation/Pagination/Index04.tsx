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
            快速跳转到某一页。
          </Paragraph>
        </Typography>
        <Pagination showQuickJumper defaultCurrent={1} total={500} />
        <Pagination disabled showQuickJumper defaultCurrent={1} total={500} />
      </div>
    );
  }
}
export default Index;
