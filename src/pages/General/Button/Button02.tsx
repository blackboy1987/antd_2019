import {
  Typography,
  Button,
  Icon,
} from 'antd';

import styles from './Button02.less';

import React, { Component } from 'react';

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Button02 extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
            <br/>
            如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
          </Paragraph>
        </Typography>
        <Button icon="search" className={styles.antBtn} type="primary" shape="circle" style={{ marginRight: 8 }}/>
        <Button icon="search" type="primary" style={{ marginRight: 8 }}>search</Button>
        <Button icon="search" shape="circle" style={{ marginRight: 8 }}/>
        <Button icon="search" style={{ marginRight: 8 }}>search</Button>
        <Button icon="search" type="dashed" shape="circle" style={{ marginRight: 8 }}/>
        <Button icon="search" type="dashed" style={{ marginRight: 8 }}>search</Button>

        <Button type="primary" style={{ marginRight: 8 }}>search<Icon type="search" style={{ marginLeft: 20 }} /></Button>
      </div>
    );
  }
}
export default Button02;
