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
            自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：

            提供受控属性 value 或其它与 valuePropName 的值同名的属性。

            提供 onChange 事件或 trigger 的值同名的事件。

            支持 ref：

            React@16.3.0 之前只有 Class 组件支持。

            React@16.3.0 及之后可以通过 forwardRef 添加 ref 支持。（示例）
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
