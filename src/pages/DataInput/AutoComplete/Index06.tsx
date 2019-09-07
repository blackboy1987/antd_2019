import {
  Typography,
  AutoComplete,
  Button,
  Input,
  Icon,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

const { Option } = AutoComplete;

function onSelect(value:string) {
  console.log('onSelect', value);
}

function getRandomInt(max:number, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function searchResult(query:any) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item:any) {
  return (
    <Option key={item.category} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on
          <a
            href={`https://s.taobao.com/search?q=${item.query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.category}
          </a>
        </span>
        <span className="global-search-item-count">{item.count} results</span>
      </div>
    </Option>
  );
}

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state = {
    dataSource: [],
  };

  handleSearch = (value:string) => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            查询模式: 不确定类目。
          </Paragraph>
        </Typography>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
          optionLabelProp="text"
        >
          <Input
            suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                size="large"
                type="primary"
              >
                <Icon type="search" />
              </Button>
            }
          />
        </AutoComplete>
      </div>
    );
  }
}
export default Index;
