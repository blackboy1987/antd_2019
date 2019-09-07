import {
  Typography,
  AutoComplete,
  Input,
  Icon,
} from 'antd';

import React, { Component } from 'react';

const {Option,OptGroup} = AutoComplete;

const dataSource = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'AntDesign',
        count: 10000,
      },
      {
        title: 'AntDesign UI',
        count: 10600,
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'AntDesign UI',
        count: 60100,
      },
      {
        title: 'AntDesign',
        count: 30010,
      },
    ],
  },
  {
    title: 'Articles',
    children: [
      {
        title: 'AntDesign design language',
        count: 100000,
      },
    ],
  },
];

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const options = dataSource.map((item) => (
      <OptGroup label={item.title} key={item.title}>
        {
          item.children.map(child => (
            <Option key={child.title}>
              {child.title}
              <span style={{float:'right'}}>{child.count} people</span>
            </Option>))
        }
      </OptGroup>
    ));

    return (
      <div>
        <Typography>
          <Paragraph>
            查询模式: 确定类目。
          </Paragraph>
        </Typography>
          <AutoComplete
              dropdownMatchSelectWidth={false}
              dropdownStyle={{ width: 300 }}
              size="large"
              style={{ width: '100%' }}
              dataSource={options}
              placeholder="input here"
              optionLabelProp="value"
          >
              <Input suffix={<Icon type="search" className="certain-category-icon" />} />
          </AutoComplete>
      </div>
    );
  }
}
export default Index;
