import styled from 'styled-components';

import { Layout as AntdLayout, Form } from 'antd';
import { getColorByName } from 'helpers';

export const TooltipContent = styled.div`
    max-width: 200px;
`

export const SocialWrapper = styled.div`
   display: flex;
   align-items: center;
   
    & > img {
            opacity: 0.5;
            pointer-events: none;
            margin-right: 12px;
            width: 24px;
        }
`;

export const Item = styled.div`
    margin-bottom: 30px;
`;

export const EmailItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
    width: 100%;
    & > span {
        cursor: pointer;
        &:hover {
            color: ${getColorByName('primary')};
        }
    }
    margin-bottom: 12px;
`;

export const StyledForm = styled(Form)`
    max-width: 400px;
    margin-top: -15px;
    
    & input {
        max-width: 300px;
    }
`;

export const SettingsRoot = styled(AntdLayout.Content)`
    height: 100%;
    padding: 24px;
    background-color: ${getColorByName('white')};
`;
