import React, { Component } from 'react';
import { TreeSelect, Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

class Index extends Component {
  renderTreeNode = treeNodes => treeNodes.map(item => {
    if (item.children && item.children.length > 0) {
      return (
        <TreeSelect.TreeNode key={item.id} title={item.title} value={item.id} >
          {
            this.renderTreeNode(item.children)
          }
        </TreeSelect.TreeNode>
      );
    }
    return <TreeSelect.TreeNode key={item.id} title={item.title} value={item.id} />;
  });

  render() {
    const treeNodes = [
      {
        id: 1,
        title: '菜单1',
        children: [
          {
            id: 11,
            title: '菜单1=1',
          }, {
            id: 12,
            title: '菜单1=2',
          },
        ],
      }, {
        id: 2,
        title: '菜单2',
      },
    ];

    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <TreeSelect
            style={{ width: '100%' }}
            treeCheckable
            treeDefaultExpandAll
            showCheckedStrategy="SHOW_CHILD"
          >
            <TreeSelect.TreeNode
              value="1"
              title="11"
            >
              <TreeSelect.TreeNode
                value="11"
                title="11-01"
              />
              <TreeSelect.TreeNode
                value="12"
                title="11-02"
              />
            </TreeSelect.TreeNode>
            <TreeSelect.TreeNode
              value="2"
              title="22"
            >
              <TreeSelect.TreeNode
                value="22"
                title="22-01"
              />
            </TreeSelect.TreeNode>
          </TreeSelect>
          <hr />
          <TreeSelect
            style={{ width: '100%' }}
            treeCheckable
            treeDefaultExpandAll
            showCheckedStrategy="SHOW_CHILD"
            treeIcon
          >
            {this.renderTreeNode(treeNodes)}
          </TreeSelect>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
