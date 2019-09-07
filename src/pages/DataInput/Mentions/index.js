import React, { PureComponent } from 'react';
import { Mentions, Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

class Index extends PureComponent {
    onChange = (value) => {
        console.log("onChange", value);
    };

    onSelect = (option, prefix) => {
        console.log("onSelect", option, prefix);
    }

    render() {
        return (
            <PageHeaderWrapper>
                <Card bordered={false}>
                    <Mentions
                        notFoundContent="hahah"
                        split=";"
                        prefix={[';']}
                        onChange={this.onChange}
                        onSelect={this.onSelect}
                    >
                        <Mentions.Option
                            value="163"
                            children='hahah'
                        >
                            163
                        </Mentions.Option>
                    </Mentions>
                </Card>
            </PageHeaderWrapper>
        );
    }
}

export default Index;
