import {
  Typography,
  Input,
  Tooltip,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {

  state = {
    cardNumber: '',
  }

  showCardNumber = (e: Event) => {
    const value = e.target.value;
    this.setState({
      cardNumber: value,
    });
  }

  formatCardNumber = (cardNumber) => {
    // 6314 3941 2394 2134 1289 0342 31
    let cardNumberArray = new Array([...cardNumber]);
    cardNumberArray = cardNumberArray[0];
    const result = cardNumberArray.map((item, index) => {
      if (index !== 0 && index % 4 === 0) {
        return [
          ' ',
          item,
        ]
      }
      return item;
    })

    return <span>{new Array(result).flat(Infinity)}</span>
  }

  render() {
    const { cardNumber } = this.state;
    const title = this.formatCardNumber(cardNumber);
    return (
      <div>
        <Typography>
          <Paragraph>
            我们为 {'<Input />'} 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。
          </Paragraph>
        </Typography>

        <Tooltip trigger={['focus']} title={title}>
          <Input
            onChange={this.showCardNumber}
          />
        </Tooltip>

      </div>
    );
  }
}
export default Index;
