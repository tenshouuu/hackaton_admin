import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';
import {getColorByName, getMediaWidthByName} from 'helpers';
import Logo from 'components/Logo';
import { BellOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const { Header } = AntdLayout;

export const FakeLink = styled.div`
    cursor: pointer;
    &:hover {
        color: ${getColorByName('primary')};
    }
`;

export const Burger = styled.div`
    width: 14px;
      cursor: pointer;
      z-index: 100;
    
      &:before,
      &:after,
      & div {
          background-color: ${getColorByName('dark')};
          border-radius: 2px;
          content: '';
          display: block;
          height: 2px;
          margin: 2px 0;
          transition: all .2s ease-in-out;
      }
    
      @media (min-width: ${getMediaWidthByName('mobile')}) {
          display: none;
      }
`;

export const StyledBellOutlined = styled(BellOutlined)`
    margin-right: 12px;
    font-size: 18px;
    opacity: 0.5;
    pointer-events: none;
    
    @media (min-width: ${getMediaWidthByName('mobile')}) {
        margin-right: 40px;
        font-size: 20px;
    }
`;

export const Panel = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const DropdownLink = styled.a`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Username = styled.div`
    display: none;
    color: ${getColorByName('dark')};
    margin-right: 12px;
    
     @media (min-width: ${getMediaWidthByName('mobile')}) {
          display: block;
    }
`;

export const OutLineUser = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ;
    background-color: ${getColorByName('white')};
    margin-right: 8px;
`;

export const StyledLogo = styled(Logo)`
    font-size: 24px;
    line-height: 30px;
    
    @media (max-width: ${getMediaWidthByName('mobile')}) {
          font-size: 18px;
          position: absolute;
            width: 100%;
            height: 100%;
            line-height: 64px;
            left: 0;
            top: 0;
     }
`;

export const LogoLink = styled(Link)``;

export const HeaderRoot = styled(Header)`
     display: flex;
     align-items: center;
     justify-content: space-between;
     background-color: ${getColorByName('white')};
     padding: 0 16px;
     position: relative;
     
     @media (min-width: ${getMediaWidthByName('mobile')}) {
          padding: 0 24px;
     }
`;
