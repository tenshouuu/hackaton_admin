import styled from 'styled-components';

import Socials from 'components/Socials';
import { Layout as AntdLayout, Card } from 'antd';

export const TitleCard = styled.div`
    display: flex;
    
    & > h4 {
        margin-top: 4px;
        margin-left: 12px;
    }
`;

export const StyledSocials = styled(Socials)`
    margin-bottom: 24px;
`;

export const StyledContent = styled(AntdLayout.Content)`
    padding: 24px;
    flex: 1;
`;

export const StyledCard = styled(Card)`
    width: 300px;
`;

export const ResumeRoot = styled.div`
    display: flex;
    
    & h4.ant-typography, .ant-typography h4 {
        font-size: 16px;
    }
`;


