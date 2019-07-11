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
            Flex 子元素垂直对齐。
          </Paragraph>
        </Typography>
        <Row type="flex" justify="center" align="top" style={{ height: 200, border: 'solid 1px green' }}>
          <Col className={styles.col1} style={{ height: 100 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 110 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 120 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 130 }}>col-1</Col>
        </Row>
        <Row type="flex" justify="center" align="bottom" style={{ height: 200, border: 'solid 1px green' }}>
          <Col className={styles.col1} style={{ height: 100 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 110 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 120 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 130 }}>col-1</Col>
        </Row>
        <Row type="flex" justify="center" align="middle" style={{ height: 200, border: 'solid 1px green' }}>
          <Col className={styles.col1} style={{ height: 100 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 110 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 120 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 130 }}>col-1</Col>
        </Row>

        <Row type="flex" justify="center" align="top" style={{ height: 200, border: 'solid 1px green' }}>
          <Col className={styles.col1} style={{ height: 190 }}>
            <Row type="flex" justify="center" align="middle" style={{ height: 150, border: 'solid 1px green' }}>
              <Col className={styles.col1} style={{ height: 100 }}>col-1</Col>
              <Col className={styles.col1} style={{ height: 110 }}>col-1</Col>
              <Col className={styles.col1} style={{ height: 120 }}>col-1</Col>
              <Col className={styles.col1} style={{ height: 130 }}>col-1</Col>
            </Row>
          </Col>
          <Col className={styles.col1} style={{ height: 110 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 120 }}>col-1</Col>
          <Col className={styles.col1} style={{ height: 130 }}>col-1</Col>
        </Row>

      </div>
    );
  }
}
export default Index;
