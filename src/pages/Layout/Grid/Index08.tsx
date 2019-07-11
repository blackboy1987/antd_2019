import {
  Typography,
  Row,
  Col,
} from 'antd';

import styles from './Index.less';

import React, { Component } from 'react';

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl  xxl。
          </Paragraph>
        </Typography>
        <Row>
          <Col className={styles.col1} xs={2} sm={4} md={6} lg={8} xl={10}>
            Col
          </Col>
          <Col className={styles.col2} xs={20} sm={16} md={12} lg={8} xl={4}>
            Col
          </Col>
          <Col className={styles.col3} xs={2} sm={4} md={6} lg={8} xl={10}>
            Col
          </Col>
        </Row>,
      </div>
    );
  }
}
export default Index;
