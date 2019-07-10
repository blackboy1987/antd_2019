import {
  Typography,
  Row,
  Col,
} from 'antd';
import React, { Component } from 'react';

import styles from './Index.less';

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)
          </Paragraph>
        </Typography>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6} className={styles.col1}>col-6</Col>
          <Col span={6} className={styles.col2}>col-6</Col>
          <Col span={6} className={styles.col3}>col-6</Col>
          <Col span={6} className={styles.col4}>col-6</Col>
        </Row>
      </div>
    );
  }
}
export default Index;
