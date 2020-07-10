import styled from 'styled-components';
import Logo from "components/Logo";
import {getColorByName} from "helpers";


export const OutLineUser = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${getColorByName('white')};
`;
export const StyledLogo = styled(Logo)`
    font-size: 24px;
    line-height: 30px;
`;

export const LayoutRoot = styled.div`
    height: 100%;

    & > section {
        min-height: 100vh;
    }
    
    & .ant-layout-header {
        background-color: white;
    }
    
    & .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
        background-color: #222222;
    }
    
    & .header {
        display: flex;
        align-items: center;
        padding-left: 24px;
        justify-content: space-between;
    }
    
    & #components-layout-demo-top-side-2 .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 28px 16px 0;
      float: left;
    }

    & .site-layout-background {
      background: #fff;
    }
`;


