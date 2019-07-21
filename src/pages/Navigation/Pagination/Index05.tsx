import {
  Typography,
  Pagination,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  showTotal=(total: number, range: number[]) => (
      <span>
        <h1>总记录数：{total}</h1>
        <h4>当前显示第 {range[0]} 到 {range[1]} 条记录</h4>
      </span>
    );

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            迷你版本。
          </Paragraph>
        </Typography>
        <Pagination size="small" defaultCurrent={1} total={500} />
        <Pagination size="small" showQuickJumper showSizeChanger defaultCurrent={1} total={500} />
        <Pagination showTotal={this.showTotal} size="small" defaultCurrent={1} total={500} />

      </div>
    );
  }
}
export default Index;
