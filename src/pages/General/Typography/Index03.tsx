import {
  Typography,
} from 'antd';
import React, { Component } from 'react';

const { Paragraph, Text } = Typography;


// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            文本组件
          </Paragraph>
        </Typography>
        <Text>Ant Design</Text>
        <br />
        <Text type="secondary">Ant Design</Text>
        <br />
        <Text type="warning">Ant Design</Text>
        <br />
        <Text type="danger">Ant Design</Text>
        <br />
        <Text disabled>Ant Design</Text>
        <br />
        <Text mark>Ant Design</Text>
        <br />
        <Text code>Ant Design</Text>
        <br />
        <Text underline>Ant Design</Text>
        <br />
        <Text delete>Ant Design</Text>
        <br />
        <Text strong>Ant Design</Text>
      </div>
    );
  }
}
export default Index;
