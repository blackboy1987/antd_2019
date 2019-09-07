import {
  Typography,
  AutoComplete,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state = {
    data: [
      {
        key: 1,
        label: 'a',
      },
      {
        key: 2,
        label: 'ab',
      },
      {
        key: 3,
        label: 'bc',
      },
      {
        key: 4,
        label: 'cdfg',
      },
    ],
  };

  render() {
    const { data } = this.state;
    const children = data.map(item => (
      <AutoComplete.Option key={item.key}>
        {item.label}
      </AutoComplete.Option>
    ));
    // @ts-ignore
    return (
      <div>
        <Typography>
          <Paragraph>
            也可以直接传 AutoComplete.Option 作为 AutoComplete 的 children，而非使用 dataSource。
          </Paragraph>
        </Typography>
        <AutoComplete
          filterOption={(inputValue, options) => (options.props.children.indexOf(inputValue) >= 0)}
        >
          {children}
        </AutoComplete>
      </div>
    );
  }
}
export default Index;
