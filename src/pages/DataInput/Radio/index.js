import React, { PureComponent } from 'react';
import { Radio, Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

class Index extends PureComponent {
    onChange= e => {
        // eslint-disable-next-line no-console
        console.log(e.target.value);
    };

    render() {
        return (
            <PageHeaderWrapper>
                <Card bordered={false}>
                    <Radio.Group defaultValue="2" onChange={this.onChange}>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                    </Radio.Group>
                    <hr/>
                    <Radio.Group buttonStyle="solid" defaultValue="2" onChange={this.onChange}>
                        <Radio.Button value="1">1</Radio.Button>
                        <Radio.Button value="2">2</Radio.Button>
                        <Radio.Button value="3">3</Radio.Button>
                        <Radio.Button value="4">4</Radio.Button>
                        <Radio.Button value="5">5</Radio.Button>
                    </Radio.Group>
                    <hr />
                    <Radio.Group
                        buttonStyle="solid"
                        defaultValue={2}
                        options={[{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }]}
                        onChange={this.onChange}
                    />
                </Card>
            </PageHeaderWrapper>
        );
    }
}

export default Index;
