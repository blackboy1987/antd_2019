import {
  Typography,
  PageHeader,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const routes = [
      {
        path: 'index',
        breadcrumbName: 'First-level Menu',
      },
      {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
      },
      {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
      },
    ];

    const content = (
      <div className="content">
        <Paragraph>
          Ant Design interprets the color system into two levels: a system-level color system and a
          product-level color system.
        </Paragraph>
        <Paragraph>
          Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
          easier for designers to have a clear psychological expectation of color when adjusting colors,
          as well as facilitate communication in teams.
        </Paragraph>
        <p className="contentLink">
          <a>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
              alt="start"
            />
            Quick Start
          </a>
          <a>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" alt="info" />
            Product Info
          </a>
          <a>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" alt="doc" />
            Product Doc
          </a>
        </p>
      </div>
    );

    const extraContent = (
      <img
        src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
        alt="content"
      />
    );

    return (
      <div>
        <Typography>
          <Paragraph>
            带内容的例子,可以优先展示页面的主要信息。
          </Paragraph>
        </Typography>
        <PageHeader title="Title" breadcrumb={{ routes }} extra={extraContent}>
          <div className="wrap">
            <div className="content">{content}</div>
            <div className="extraContent">{extraContent}</div>
          </div>
        </PageHeader>
      </div>
    );
  }
}
export default Index;
