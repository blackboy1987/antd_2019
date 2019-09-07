import {
  Typography,
  AutoComplete,
} from 'antd';

import React, { Component } from 'react';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            不区分大小写的 AutoComplete
          </Paragraph>
        </Typography>
        <AutoComplete
          style={{ width: 200 }}
          dataSource={dataSource}
          placeholder="try to type `b`"
          filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
    );
  }
}
export default Index;
