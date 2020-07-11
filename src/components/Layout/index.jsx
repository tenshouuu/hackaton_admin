import React, { useState, useCallback } from 'react';
import { Layout as AntdLayout, Breadcrumb } from 'antd';
import { Route } from 'react-router-dom';

import {
  LayoutRoot,
  StyledSider,
  MenuWrapper,
  StyledDrawer,
  PageContainer,
  StyledFooter,
  Container,
} from './styled';
import { Header, Menu } from './components';
import { routes } from './helpers';

function Layout() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsShowMenu((val) => !val);
  }, []);

  return (
    <LayoutRoot>
      <AntdLayout>
        <Header toggleMenu={handleToggleMenu} />
        <AntdLayout>
          <StyledSider width={200} className="site-layout-background">
            <Menu />
          </StyledSider>
          <PageContainer>
            {routes.map(({
              titles,
              Component,
              path,
              ...props
            }, i) => (
              <Route
                key={i}
                path={`${path}`}
                render={() => (
                  <>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      {titles.map((title, j) => (
                        <Breadcrumb.Item key={j}>{title}</Breadcrumb.Item>
                      ))}
                    </Breadcrumb>
                    <Container>
                        <Component />
                    </Container>
                  </>
                )}
                {...props}
              />
            ))}
            <StyledFooter style={{ textAlign: 'center' }}>
              HR Track ©
              {(new Date()).getFullYear()}
              {' '}
              Created by CrazyTeam
            </StyledFooter>
          </PageContainer>
        </AntdLayout>
      </AntdLayout>
      <StyledDrawer
        title="Меню"
        placement="left"
        closable={false}
        onClose={handleToggleMenu}
        visible={isShowMenu}
        key="left"
      >
        <MenuWrapper>
          <Menu handleClick={handleToggleMenu} />
        </MenuWrapper>
      </StyledDrawer>
    </LayoutRoot>
  );
}

export default React.memo(Layout);
