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
            通过使用 onFieldsChange 与 mapPropsToFields，可以把表单的数据存储到上层组件或者 Redux、dva 中，更多可参考 rc-form 示例。

            注意：mapPropsToFields 里面返回的表单域数据必须使用 Form.createFormField 包装。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
