import styled from 'styled-components';

export const StyledLink = styled.a`
    & > img {
        width: 16px;
    }
    
    &:not(:last-child) {
        margin-right: 4px;
    }
`;

export const SocialsRoot = styled.div`
    display: flex;
`;


