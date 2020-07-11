import styled from 'styled-components';
import { getColorByName } from 'helpers';

import Logo from "components/Logo";

export const Block = styled.div`
    background-color: ${getColorByName('primary')};
    width: 300px;
    height: 40px;
    border-radius: 20px;
    transform: rotate(-40deg);
    position: absolute;
    
    &:first-child {
        right: 0;
        bottom: -40px;
    }
    
    &:nth-child(2) {
        right: 190px;
        top: 260px;
        transform: scale(2) rotate(-40deg);
    }
    
    &:nth-child(3) {
            right: 20px;
            top: 350px;
            width: 650px;
            transform: scale(0.5) rotate(-40deg);
    }
    
    &:nth-child(4) {
        bottom: 80px;
        left: 0px;
        transform: scale(1.6) rotate(-40deg);
    }
`;


export const Area = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

export const AreaWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;

export const StyledLogo = styled(Logo)`
    margin: 0 auto 32px;
`;

export const Container = styled.div`
    width: 100%;
    position: relative;
    max-width: 380px;
    background-color: ${getColorByName('white')};
    box-shadow: 0px 0px 20px rgba(128, 163, 182, 0.0996504);
    padding: 40px 40px 20px;
    border-radius: 6px;
    margin: 0 16px;
    
    & button {
        margin-right: 12px;
    }
`;

export const AuthRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    height: 100%;
`;
