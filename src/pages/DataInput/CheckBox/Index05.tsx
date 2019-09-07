import {
  Typography,
  Checkbox,
} from 'antd';

import React, { Component } from 'react';

const CheckboxGroup = Checkbox.Group;
const { Paragraph } = Typography;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange',];


// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {

  state = {
    checkedList: defaultCheckedList,
    checkedAll: false,
  };

  onCheckAllChange=(e:Event) => {
    this.setState({
      checkedAll: e.target.checked,
      checkedList: e.target.checked ? plainOptions : [],
    });
  };

  onChange=(checkedList:any) => {
    this.setState({
      checkedList,
      checkedAll: checkedList.length === plainOptions.length || false,
    });
  };

  render() {
    const {
      checkedList,
      checkedAll,
    } = this.state;
    const indeterminate = (checkedList.length>0&&checkedList.length<plainOptions.length) || false;
    return (
      <div>
        <Typography>
          <Paragraph>
            在实现全选效果时，你可能会用到 indeterminate 属性
          </Paragraph>
        </Typography>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={this.onCheckAllChange}
            checked={checkedAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          value={checkedList}
          options={plainOptions}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default Index;
