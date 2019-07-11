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
            span pull push offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。
          </Paragraph>
          <Row>
            <Col className={styles.col1} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              Col
            </Col>
            <Col className={styles.col2} xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              Col
            </Col>
            <Col className={styles.col3} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              Col
            </Col>
          </Row>
        </Typography>
      </div>
    );
  }
}
export default Index;
