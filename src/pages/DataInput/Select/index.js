import React, { Component } from 'react';
import { Select, Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

class Index extends Component {
  state = {
    selectItems: [],
  }

  onChange = values => {
    this.setState({
      selectItems: values,
    });
  }

  render() {
    const { selectItems } = this.state;
    const filteredOptions = OPTIONS.filter(item => !selectItems.includes(item));
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Select
            style={{ width: '100%' }}
            showSearch
            mode="multiple"
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="Yiminghe">yiminghe</Select.Option>
          </Select>
          <hr />
          <Select
            style={{ width: '100%' }}
            showSearch
            mode="tags"
            onChange={this.onChange}
            labelInValue
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="Yiminghe">yiminghe</Select.Option>
          </Select>
          <hr />
          <Select
            style={{ width: '100%' }}
            showSearch
            mode="multiple"
            onChange={this.onChange}
          >
            {filteredOptions.map(item => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
