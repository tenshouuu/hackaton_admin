import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Menu as AntdMenu } from 'antd';

import { NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { MenuRoot, StyledLink, StyledItem } from './styled';

const { SubMenu } = AntdMenu;

const links = [
  {
    title: 'Все',
    link: '/dashboard',
  },
  {
    title: 'Избранное',
    link: '/favorite',
  },
  {
    title: 'Отклоненные',
    link: '/declined',
  },
  {
    title: 'Архив',
    link: '/archive',
  },
];

function Menu() {
  const { url } = useRouteMatch();
  return (
    <MenuRoot
      mode="inline"
      theme="dark"
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<UserOutlined />} title="Резюме">
        {links.map(({ title, link }) => (
          <StyledItem key={link} isSelected={url === link}>
            <StyledLink to={link}>
              {title}
            </StyledLink>
          </StyledItem>
        ))}
      </SubMenu>
      <SubMenu key="sub3" icon={<NotificationOutlined />} title="Сообщения" style={{ pointerEvents: 'none', opacity: '0.5' }}>
        <StyledItem key="9">option9</StyledItem>
        <StyledItem key="10">option10</StyledItem>
        <StyledItem key="11">option11</StyledItem>
        <StyledItem key="12">option12</StyledItem>
      </SubMenu>
    </MenuRoot>
  );
}

export default React.memo(Menu);
