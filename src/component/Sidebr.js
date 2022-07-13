import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';



export class Sidebr extends Component {
  render() {
    return (
      <div>
          <ProSidebar  bar>
            <Menu iconShape="square">
              <MenuItem icon={""}>Dashboard</MenuItem>
              <SubMenu title="Components" icon={""}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
            </Menu>
          </ProSidebar>;
      </div>
    )
  }
}
export default Sidebr;


