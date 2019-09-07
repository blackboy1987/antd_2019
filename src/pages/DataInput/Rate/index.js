import React, { PureComponent } from 'react';
import { Rate, Card, Icon } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import './index.less';

class Index extends PureComponent {

    state = {
        text:''
    };

    onHoverChange=(value)=>{
        if(value<=1){
            this.setState({
                text:"勉强",
            });
        } else if (value <= 2){
            this.setState({
                text: "及格",
            });
        } else {
            this.setState({
                text: "优秀",
            });
        }
    }

    render(){
        const {text} = this.state;
        return (
            <PageHeaderWrapper>
                <Card bordered={false}>
                    <Rate 
                        count={3}
                        allowHalf
                        defaultValue={2.5}
                        allowClear={false}
                        character={<Icon type='setting' />}
                        onHoverChange={this.onHoverChange}
                     />
                     {text}
                </Card>
            </PageHeaderWrapper>
        )
    }
}

export default Index;
