import {
  Typography,
  Checkbox,
  Button,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state={
    checked: true,
    disabled: false,
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  onChange = e => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const { checked, disabled } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            联动 checkbox。
          </Paragraph>
        </Typography>
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={this.onChange}
        >
          {checked ? 'Checked' : 'Unchecked' } -
          {disabled ? 'Disabled' : 'Enabled' }
        </Checkbox>
        <br/>
        <br/>
        <Button size="small" type="primary" onClick={this.toggleChecked}>
          {checked ? 'Uncheck' : 'Checked' }
        </Button>
        &nbsp;&nbsp;
        <Button size="small" type="primary" onClick={this.toggleDisable}>
          {disabled ? 'Enabled' : 'Disable' }
        </Button>
      </div>
    );
  }
}
export default Index;
