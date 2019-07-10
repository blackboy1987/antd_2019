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
            列偏移。
            <br/>
            使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。
          </Paragraph>
        </Typography>
        <Row>
          <Col span={6} className={styles.col1}>col-6</Col>
          <Col span={6} className={styles.col2}>col-6</Col>
          <Col span={6} className={styles.col1}>col-6</Col>
          <Col span={6} className={styles.col2}>col-6</Col>
          <Col span={6} className={styles.col1}>col-6</Col>
          <Col span={6} className={styles.col2}>col-6</Col>
          <Col span={6} className={styles.col1}>col-6</Col>
          <Col span={6} className={styles.col2}>col-6</Col>
        </Row>
        <Row>
          <Col offset={24} span={6} className={styles.col1}>col-6</Col>
        </Row>
      </div>
    );
  }
}
export default Index;
