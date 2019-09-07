import {
  Typography,
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
            我们提供了 validateStatus help hasFeedback 等属性，你可以不需要使用 Form.create 和 getFieldDecorator，自己定义校验的时机和内容。

            validateStatus: 校验状态，可选 'success', 'warning', 'error', 'validating'。

            hasFeedback：用于给输入框添加反馈图标。

            help：设置校验文案。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
