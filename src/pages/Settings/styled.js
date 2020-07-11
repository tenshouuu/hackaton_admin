import styled from 'styled-components';

import { Layout as AntdLayout, Form } from 'antd';
import { getColorByName } from 'helpers';

export const TooltipContent = styled.div`
max-width: 200px;
`
export const Item = styled.div`
    margin-bottom: 30px;
    
    & > div {
        display: flex;
        
        & > img {
            opacity: 0.5;
            pointer-events: none;
            margin-right: 12px;
            width: 24px;
        }
    }
`;

export const StyledForm = styled(Form)`
    max-width: 400px;
`;

export const SettingsRoot = styled(AntdLayout.Content)`
    height: 100%;
    padding: 24px;
    background-color: ${getColorByName('white')};
`;
