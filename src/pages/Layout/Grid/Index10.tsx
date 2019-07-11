import {
  Typography,
  Row,
  Col,
  Slider,
} from 'antd';

import styles from './Index.less';

import React, { Component } from 'react';

const { Paragraph } = Typography;

const gutters = { 0: 8, 1: 16, 2: 24, 3: 32, 4: 40, 5: 48 };
const columns = { 0: 2, 1: 3, 2: 4, 3: 6, 4: 8, 5: 12 };

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state={
    gutterKey: 1,
    colCountKey: 2,
    gutter: 16,
    colCount: 4,
  };

  changeGutter= (value: any) => {
    this.setState({
      gutterKey: value,
      gutter: gutters[value],
    });
  };

  changeColCount= (value: any) => {
    this.setState({
      colCountKey: value,
      colCount: columns[value],
    });
  };

  render() {
    const { gutterKey, colCountKey, gutter, colCount } = this.state;
    const cols = [];
    let colCode = '';
    for (let i = 0; i < colCount; i += 1) {
      cols.push(<Col span={24 / colCount}><div className={styles.col1}>{`colo-${i}`}</div></Col>);
      colCode += `  <Col span={${24 / colCount}} />\n`;
    }

    return (
      <div>
        <Typography>
          <Paragraph>
            可以简单配置几种等分栅格和间距。
          </Paragraph>
        </Typography>
        <h1>Gutter (px):</h1>
        <Slider
          step={null}
          max={5}
          min={0}
          value={gutterKey}
          onChange={this.changeGutter}
          marks={gutters}
        />
        <h1>Column Count:</h1>
        <Slider
          step={null}
          max={5}
          min={0}
          value={colCountKey}
          onChange={this.changeColCount}
          marks={columns}
        />

        <Row gutter={gutter}>
          {cols}
        </Row>
        <pre>{`<Row gutter={${gutter}}>\n${colCode}</Row>`}</pre>
      </div>
    );
  }
}
export default Index;
