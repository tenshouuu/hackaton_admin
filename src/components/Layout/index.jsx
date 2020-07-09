import React from 'react';
import { Layout as AntdLayout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import Resumes from 'components/Resumes';
import { LayoutRoot, StyledLogo, OutLineUser } from './styled';

const { SubMenu } = Menu;
const { Header, Content, Sider } = AntdLayout;

function Layout() {
  return (
    <LayoutRoot>
      <AntdLayout>
        <Header className="header">
          <StyledLogo />
          <OutLineUser>
            <UserOutlined />
          </OutLineUser>
        </Header>
        <AntdLayout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Resumes">
                <Menu.Item key="1">All</Menu.Item>
                <Menu.Item key="2">Favorite</Menu.Item>
                <Menu.Item key="3">Declined</Menu.Item>
                <Menu.Item key="4">Archive</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <AntdLayout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Resumes</Breadcrumb.Item>
              <Breadcrumb.Item>All</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Resumes />
            </Content>
          </AntdLayout>
        </AntdLayout>
      </AntdLayout>
    </LayoutRoot>
  );
}

export default React.memo(Layout);
