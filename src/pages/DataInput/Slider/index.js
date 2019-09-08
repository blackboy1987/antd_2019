import React, { Component } from 'react';
import { Slider, Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

class Index extends Component {
  state = {
    value: [20, 30],
  };

  onChange = value => {
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;
    const marks = {
      0: {
        style: {
          color: 'red',
        },
        label: <h1>0</h1>,
      },
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      60: '60',
      70: '70',
      80: '80',
      90: '90',
      100: '100',
    };

    return (
      <PageHeaderWrapper>
        <Card border={false}>
          <Slider
            max={1000}
            min={100}
            range
            tooltipVisible
          />
          <hr />
          <Slider
            step={10}
            range
            marks={marks}
            value={value}
            tooltipVisible
            onChange={this.onChange}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
