import {
  Typography,
  Radio,
  Button,
  Icon,
} from 'antd';
import React, { Component } from 'react';

const { Paragraph } = Typography;
class Button03 extends Component {
  state = {
    size: 'default',
  };

  handleSizeChange= (e: any) => {
    this.setState({
      size: e.target.value,
    });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            按钮有大、中、小三种尺寸。
            <br/>
            通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
          </Paragraph>
        </Typography>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <hr />
        <Button size={size} type="primary" style={{ marginRight: 8 }}>primary</Button>
        <Button size={size} style={{ marginRight: 8 }}>default</Button>
        <Button size={size} type="dashed" style={{ marginRight: 8 }}>dashed</Button>
        <Button size={size} type="danger" style={{ marginRight: 8 }}>danger</Button>
        <Button size={size} type="link" style={{ marginRight: 8 }}>link</Button>
        <Button size={size} type="primary" style={{ marginRight: 8 }} shape="circle" icon="download" />
        <Button size={size} type="primary" style={{ marginRight: 8 }} shape="round" icon="download">download</Button>
        <Button size={size} type="primary" style={{ marginRight: 8 }} icon="download">download</Button>
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
      </div>

    );
  }
}
export default Button03;
