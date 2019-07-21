import {
  Typography,
  PageHeader,
  Tag,
  Tabs,
  Button,
  Col,
  Row,
  Statistic,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const Description = ({ term, children, span = 12 }) => (
      <Col span={span}>
        <div className="description">
          <div className="term">{term}</div>
          <div className="detail">{children}</div>
        </div>
      </Col>
    );

    const content = (
      <Row>
        <Description term="Created">Lili Qu</Description>
        <Description term="Association">
          <a>421421</a>
        </Description>
        <Description term="Creation Time">2017-01-10</Description>
        <Description term="Effective Time">2017-10-10</Description>
        <Description term="Remarks" span={24}>
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Description>
      </Row>
    );

    const extraContent = (
      <Row>
        <Col span={12}>
          <Statistic title="Status" value="Pending" />
        </Col>
        <Col span={12}>
          <Statistic title="Price" prefix="$" value={568.08} />
        </Col>
      </Row>
    );

    return (
      <div>
        <Typography>
          <Paragraph>
            使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。
          </Paragraph>
        </Typography>
        <PageHeader
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          tags={[<Tag color="red">error</Tag>, <Tag color="green">success</Tag>]}
          extra={[
            <Button>1</Button>,
            <Button>2</Button>,
            <Button>3</Button>,
          ]}
          footer={
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Details" key="1" />
              <Tabs.TabPane tab="Rule" key="2" />
            </Tabs>
          }
        >
          <div className="wrap">
            <div className="content padding">{content}</div>
            <div className="extraContent">{extraContent}</div>
          </div>
        </PageHeader>
      </div>
    );
  }
}
export default Index;
