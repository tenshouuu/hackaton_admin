import styled, { css } from 'styled-components';
import { Menu as AntdMenu, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { getColorByName } from 'helpers';

const { Item } = AntdMenu;

export const StyledItem = styled(Item)`
    ${({ isSelected }) => (isSelected ? css`
        background-color: ${getColorByName('primary')};
        color: ${getColorByName('white')};
    ` : css`
        background-color: transparent !important;
        color: rgba(255, 255, 255, 0.65);
    `)}
`;

export const StyledLink = styled(Link)`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const MenuRoot = styled(Menu)`
    
`;
