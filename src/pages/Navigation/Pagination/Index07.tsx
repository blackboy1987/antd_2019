import {
  Typography,
  Pagination,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state = {
    current: 1,
  };

  onChange=(page:number, pageSize?:number) => {
    console.log(page, pageSize);
    this.setState({
      current: page,
    });
  };

  shoTotal=(total:number, range:number[]) => (
      <span>
        {total}=====from {range[0]} to {range[1]}
      </span>
    );

  render() {
    const { current } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            受控制的页码。
          </Paragraph>
        </Typography>
        <Pagination total={500} showTotal={this.shoTotal} onChange={this.onChange} current={current} />
      </div>
    );
  }
}
export default Index;
