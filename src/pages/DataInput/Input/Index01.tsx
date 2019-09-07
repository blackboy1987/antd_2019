import {
  Typography,
  Input,
  Icon,
  Button,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {

  changePasswordInput = () => {
    document.getElementById("password").setAttribute("type", "text");
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            基本使用。
          </Paragraph>
          <Input
            addonAfter={<Icon type="setting" />}
            addonBefore={<Icon type="user" />}
            prefix="abc"
            suffix="def"
            onChange={(e) => console.log(e.target.value)}
            allowClear
          />


          <hr />
          <Input.TextArea
            style={{ resize: 'none' }}
            autosize={{ minRows: 2, maxRows: 20 }}
          />
          <hr />
          <Input.Search
            enterButton
          />
          <Input id="password" type="password" />
          <Button onClick={this.changePasswordInput}>改变密码框</Button>
        </Typography>
      </div>
    );
  }
}
export default Index;
