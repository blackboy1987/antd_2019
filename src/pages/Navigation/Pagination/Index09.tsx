import {
  Typography,
  Pagination,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  itemRender=(page:number, type: 'page' | 'prev' | 'next', originalElement:any) => {
    if (type === 'prev') {
      return (
        <a>没有上一页了</a>
      );
    }
    if (type === 'next') {
      return (
        <a>没有下一页了</a>
      );
    }
    return originalElement;
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            修改上一步和下一步为文字链接。
          </Paragraph>
        </Typography>
        <Pagination defaultCurrent={1} total={500} itemRender={this.itemRender} />
      </div>
    );
  }
}
export default Index;
