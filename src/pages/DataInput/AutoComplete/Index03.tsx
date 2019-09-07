import {
  Typography,
  AutoComplete,
  Input,
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
              style={{ width: 200 }}
              onSearch={this.handleSearch}
          >
              <Input.TextArea
                  placeholder="input here"
                  className="custom"
                  style={{ height: 50 }}
              />
          </AutoComplete>
      </div>
    );
  }
}
export default Index;
