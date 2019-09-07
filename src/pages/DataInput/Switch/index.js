import React, { PureComponent } from 'react';
import { Switch, Card, Modal } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

class Index extends PureComponent {
    state={
        checked: true,
    };

    onChange = (checked, e) => {
        console.log(checked, e);
    };

    onClick = checked => {
        Modal.confirm({
            title: '提示',
            content: '确定改变状态',
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
                this.setState({
                    checked,
                });
            },
        });
    };

    render() {
        const { checked } = this.state;
        return (
            <PageHeaderWrapper>
                <Card bordered={false}>
                    <Switch
                        checkedChildren="好的的好的的好的的好的的好的的"
                        unCheckedChildren="不可以不可以不可以不可以不可以"
                        onClick={this.onClick}
                        checked={checked}

                    />
                </Card>
            </PageHeaderWrapper>
        );
    }
}

export default Index;
