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
            从堆叠到水平排列。
            <br/>
            使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。
          </Paragraph>
        </Typography>
        <Row className={styles.row1}>
          <Col span={12} className={styles.col1}>
            col-12
          </Col>
          <Col span={12} className={styles.col2}>
            col-12
          </Col>
        </Row>
        <Row className={styles.row2}>
          <Col span={8} className={styles.col1}>
            col-8
          </Col>
          <Col span={8} className={styles.col2}>
            col-8
          </Col>
          <Col span={8} className={styles.col3}>
            col-8
          </Col>
        </Row>
        <Row className={styles.row3}>
          <Col span={6} className={styles.col1}>
            col-6
          </Col>
          <Col span={6} className={styles.col2}>
            col-6
          </Col>
          <Col span={6} className={styles.col3}>
            col-6
          </Col>
          <Col span={6} className={styles.col4}>
            col-6
          </Col>
        </Row>
      </div>
    );
  }
}
export default Index;
