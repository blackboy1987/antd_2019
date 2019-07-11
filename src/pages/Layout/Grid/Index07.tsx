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
            通过 Flex 布局的 Order 来改变元素的排序。
          </Paragraph>
        </Typography>
        <Row type="flex">
          <Col span={4} className={styles.col1}>col-1</Col>
          <Col span={4} className={styles.col2} order={10}>col-2</Col>
          <Col span={4} className={styles.col3} order={5}>col-3</Col>
        </Row>
      </div>
    );
  }
}
export default Index;
