import {
  Typography,
  AutoComplete,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state ={
    originData: ['ab', 'b', 'c', 'abc', 'def', 'g'],
    data: [],
  };

  handleSearch= (value:string) => {
    const { originData } = this.state;
    this.setState({
      data: originData.filter(item => item.indexOf(value) >= 0),
    });
  };

  onBlur= () => {
    console.log('onBlur');
  };

  onChange= (value:any) => {
    console.log('onChange', value);
  };

  onFocus= () => {
    console.log('onFocus');
  };

  onSelect= (value:any, option:any) => {
    console.log('onSelect', value, option);
  };

  onDropdownVisibleChange= (open:boolean) => {
    console.log('onDropdownVisibleChange', open);
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            基本使用。通过 dataSource 设置自动完成的数据源
          </Paragraph>
        </Typography>
        <AutoComplete
          dataSource={data}
          allowClear
          autoFocus
          backfill
          size="small"
          notFoundContent={<h1>not found</h1>}
          defaultActiveFirstOption={false}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onSelect={this.onSelect}
          defaultOpen
          open
          onDropdownVisibleChange={this.onDropdownVisibleChange}
          onSearch={this.handleSearch}
        />
      </div>
    );
  }
}
export default Index;
