import {
  Typography,
  PageHeader,
  Icon,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const routes = [
      {
        breadcrumbName: 'home',
        path: '/',
      },
      {
        breadcrumbName: 'article',
        path: '/article',
      },
    ];
    return (
      <div>
        <Typography>
          <Paragraph>
            带面包屑页头，适合层级比较深的页面，让用户可以快速导航。
          </Paragraph>
        </Typography>
        <PageHeader title={<h1>this is title</h1>} breadcrumb={{ routes, separator: <Icon type="setting" /> }}/>
      </div>
    );
  }
}
export default Index;
