import {
  Typography,
} from 'antd';
import React, { Component } from 'react';

const { Paragraph, Title, Text } = Typography;

class Index extends Component {
  onCopy= (e:any) => {
    alert('abc');
  };

  onStart= () => {
    console.log('onStart');
  };

  onChange= (value:string) => {
    console.log('onChange',value);
  };

  onExpand= () => {
    console.log('onExpand');
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            标题组件
          </Paragraph>
        </Typography>

        <Title copyable>h1. Ant Design</Title>
        <Title copyable={{ text: 'abc',onCopy: this.onCopy }} level={2}>h2. Ant Design</Title>
        <Title delete level={3}>h3. Ant Design</Title>
        <Title disabled level={4}>h4. Ant Design</Title>


        <Title editable>h1. Ant Design</Title>
        <Title editable={{ editable: true, onStart: this.onStart, onChange: this.onChange }} level={2} >h2. Ant Design</Title>
        <Title ellipsis level={3}>
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
        </Title>
        <Title ellipsis={{ rows: 1, expandable: true, onExpand:this.onExpand }} level={3}>
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
          h3. Ant Design
        </Title>
        <Title type="secondary" level={4}>h4. Ant Design</Title>
        <Title type="danger" level={4}>h4. Ant Design</Title>
        <Title type="warning" level={4}>h4. Ant Design</Title>
        <Text strong>strong</Text>
        <Text code>code</Text>
        <code>code</code>
      </div>
    );
  }
}
export default Index;
