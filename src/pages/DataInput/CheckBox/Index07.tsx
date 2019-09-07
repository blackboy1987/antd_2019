import {
  Typography,
  Checkbox,
  Divider,
} from 'antd';

import React, { Component, Fragment } from 'react';

const { Paragraph } = Typography;
const allPermissions = [];

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state = {
    checkedAll: false,
    permissions: [
      {
        id: 1,
        name: '店铺管理',
        children: [
          {
            id: 30,
            name: '商家管理',
          },
          {
            id: 31,
            name: '店铺管理',
          },
          {
            id: 32,
            name: '店铺分类',
          },
        ],
      },
      {
        id: 2,
        name: '商品管理',
        children: [
          {
            id: 40,
            name: '商品管理',
          },
          {
            id: 41,
            name: '库存管理',
          },
          {
            id: 42,
            name: '商品分类管理',
          },
        ],
      },
      {
        id: 3,
        name: '订单管理',
        children: [
          {
            id: 50,
            name: '订单管理',
          },
          {
            id: 51,
            name: '打印管理',
          },
          {
            id: 52,
            name: '订单支付',
          },
        ],
      },
    ],
    permissionsTree:[],
  };

  componentDidMount(): void {
    const { permissions, checkedAll } = this.state;
    this.setState({
      permissionsTree: this.renderPermission(permissions, checkedAll, { id: -1, checked: null }, { id: -1, checked: null }),
    });
  }

  // eslint-disable-next-line max-len
  renderPermission=(data: any, checked:boolean, parent:{id:number, checked:any}, current:{id:number, checked: any}) => data.map((item: {checked:boolean, children: { length: number; }; name: string; id: number; }) => {
    if (item.id === parent.id) {
      item.checked = parent.checked;
    }
    if (item.id === current.id) {
      item.checked = current.checked;
    }
    if (item.children && item.children.length > 0) {
        return {
          label: item.name,
          value: item.id,
          checked: checked || item.checked || false,
          children: this.renderPermission(item.children, item.checked || checked, { id: item.id, checked: item.checked }, { id: current.id, checked: current.checked }),
        };
      }
      return {
        label: item.name,
        value: item.id,
        checked: checked || item.checked || false,
      };
    });

  checkAll=(e:Event) => {
    const { permissions } = this.state;
    // @ts-ignore
    this.setState({
      checkedAll: e.target.checked,
      // eslint-disable-next-line max-len
      permissionsTree: e.target.checked ?
        this.renderPermission(permissions, e.target.checked, { id: -1, checked: e.target.checked }, { id: -1, checked: e.target.checked }) :
        this.renderPermission(permissions, e.target.checked, { id: -1, checked: e.target.checked }, { id: -1, checked: e.target.checked }),
    });
  };

  checkAll1=(e:Event, value:number) => {
    const { permissions,checkedAll } = this.state;
    this.setState({
      // eslint-disable-next-line max-len
      permissionsTree: this.renderPermission(permissions, checkedAll, { id: value, checked: e.target.checked }, { id: -1, checked: false }),
    });
  };

  onChange=(e:Event, value:number) => {
    const { permissions, checkedAll } = this.state;
    this.setState({
      // eslint-disable-next-line max-len
      permissionsTree: this.renderPermission(permissions, checkedAll, { id: -1, checked: false }, { id: value, checked: e.target.checked }),
    });
  };

  render() {
    const { checkedAll, permissionsTree } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            综合案例
          </Paragraph>
        </Typography>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            checked={checkedAll}
            onChange={this.checkAll}
          >
            全选
          </Checkbox>
        </div>
        <br />
        {
          // eslint-disable-next-line max-len
          permissionsTree.map((item: {
            checked:boolean,
            children: any;
            value: string | number | undefined; label: React.ReactNode; }) => (
            <Fragment>
              <Checkbox key={item.value} checked={item.checked} onChange={(e) => this.checkAll1(e, item.value)}>
                {item.label}
              </Checkbox>
              <Divider type="vertical" />
              {
                // eslint-disable-next-line max-len
                item.children.map((child: {checked:boolean, value: string | number | undefined; label: React.ReactNode; }) => (
                  <Checkbox key={child.value} checked={child.checked} onChange={(e) => this.onChange(e, child.value)}>
                    {child.label}
                  </Checkbox>
                ))
              }
              <br/>
              <br/>
            </Fragment>

          ))
        }
      </div>
    );
  }
}
export default Index;
