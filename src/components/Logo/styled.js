import styled from 'styled-components';
import { getColorByName } from "helpers";

export const LogoRoot = styled.div`
    color: ${getColorByName('primary')};
    font-size: 42px;
    line-height: 50px;
    text-align: center;
    font-weight: 700;
    width: max-content;
`;


