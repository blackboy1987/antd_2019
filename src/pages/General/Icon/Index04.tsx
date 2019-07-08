import {
  Typography,
} from 'antd';
import React, { Component } from 'react';
import { MyIcon, MyIcon1 } from '@/utils/MyIcon';


const { Paragraph } = Typography;

class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            对于使用 iconfont.cn 的用户，通过设置 createFromIconfontCN 方法参数对象中的 scriptUrl 字段， 即可轻松地使用已有项目中的图标。
          </Paragraph>
        </Typography>
        <MyIcon type="icon-che" style={{ fontSize: 100 }} />
        <MyIcon1 type="icon-ren1" style={{ fontSize: 100 }} />
      </div>
    );
  }
}
export default Index;
