import styled from 'styled-components';
import { Table, Input } from 'antd';
import { Layout as AntdLayout, Button, Menu } from 'antd';
import {getColorByName} from "helpers";


export const StyledTable = styled(Table)`
    min-width: 840px;
`;

export const StyledSearch = styled(Input.Search)`
    width: 100%;
    margin-right: 12px;
    max-width: 200px;
`;

export const Container = styled.div`
    overflow-x: auto;
`;

export const StyledMenu = styled(Menu)`
    min-width: 160px;
`;

export const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  cursor: pointer;
  padding: 8px;
 &:after,
 &:before {
    content: "";
 }
 
 &:after,
 &:before,
 & > div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${getColorByName('brown')};
 }
 
 &:after {
    margin-left: 3px;
 }
 
 &:before {
    margin-right: 3px;
 }
`;

export const StyledButton = styled(Button)`
`;

export const Filters = styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    
    & > * {
        margin-bottom: 18px;
    }
`;

export const ResumesRoot = styled(AntdLayout.Content)`
    width: 100%;
    padding: 24px;
    margin: 0;
    min-height: 300px;
    background-color: ${getColorByName('white')};
`;


