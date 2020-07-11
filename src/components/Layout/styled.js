import styled from 'styled-components';
import { Layout as AntdLayout, Drawer} from 'antd';

import { getColorByName, getMediaWidthByName } from 'helpers';

const { Sider, Footer } = AntdLayout;

export const Container = styled.div`
    flex: 1;
`;

export const PageContainer = styled(AntdLayout)`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    
    @media (min-width: ${getMediaWidthByName('mobile')}) {
          padding: 0 24px;
    }
`;

export const StyledFooter = styled(Footer)`

`;

export const StyledDrawer = styled(Drawer)`
    & .ant-drawer-body {
        padding: 0;
    }
    
    & .ant-drawer-header {
        background-color: ${getColorByName('brown')};
        border-radius: 0;
        border-bottom: 1px solid ${getColorByName('primary')};
    }
    
    & .ant-drawer-title {
        color: ${getColorByName('white')};
    }

`;

export const StyledSider = styled(Sider)`
    display: none;
    
    @media (min-width: ${getMediaWidthByName('mobile')}) {
          display: block;
    }
`;

export const MenuWrapper = styled.div`
    height: 100%;

    & .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
        background-color: ${getColorByName('brown')};
    }
`;

export const LayoutRoot = styled.div`
    height: 100%;

    & > section {
        min-height: 100vh;
    }
    
    & .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
        background-color: ${getColorByName('brown')};
    }
`;
