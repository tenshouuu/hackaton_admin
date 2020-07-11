import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined, DownOutlined, LogoutOutlined } from '@ant-design/icons';

import { useLogoutUser } from 'store/user';
import { resetStore } from 'store';
import {
  DropdownLink,
  HeaderRoot,
  OutLineUser,
  StyledLogo,
  Username,
  StyledBellOutlined,
  Panel,
  Burger,
  FakeLink,
  LogoLink,
} from './styled';

function Header({ toggleMenu }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = useLogoutUser();
  const userEmail = useSelector((state) => state.user.email);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/settings">
          Настройки
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <FakeLink onClick={() => logout().finally(() => {
          history.push('/login');
          dispatch(resetStore());
        })}
        >
          <LogoutOutlined />
          &nbsp;
          Выход
        </FakeLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderRoot>
      <Burger onClick={toggleMenu}>
        <div />
      </Burger>
      <LogoLink to="/dashboard">
        <StyledLogo />
      </LogoLink>
      <Panel>
        <StyledBellOutlined />
      </Panel>
      <Dropdown overlay={menu} trigger={['click']}>
        <DropdownLink className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <Username>{userEmail}</Username>
          <OutLineUser>
            <UserOutlined />
          </OutLineUser>
          <DownOutlined />
        </DropdownLink>
      </Dropdown>
    </HeaderRoot>
  );
}

export default React.memo(Header);
