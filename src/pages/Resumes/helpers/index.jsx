import { Tag, Menu, Dropdown } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { shuffle } from 'helpers';
import Socials from 'components/Socials';
import { ActionIcon, StyledMenu } from '../styled';

const tagColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

export const columns = [
  {
    title: 'Имя',
    key: 'name',
    width: '200px',
    render: (_, { name }) => <a>{name}</a>,
  },
  {
    title: 'Специальность',
    dataIndex: 'profile',
    key: 'profile',
  },
  {
    title: 'Средняя зарплата',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Контакты',
    key: 'contacts',
    render: (_, { contacts }) => <Socials contacts={contacts} />,
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '',
    key: 'action',
    align: 'center',
    fixed: 'right',
    width: '40px',
    render: (text, { id }) => {
      const menu = (
        <StyledMenu>
          <Menu.Item key="0">
            <Link to={`/resume/${id}`}>Открыть</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="/">В избранное</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="/">Отклонить</a>
          </Menu.Item>
        </StyledMenu>
      );
      return (
        <Dropdown overlay={menu} trigger={['click']}>
          <ActionIcon>
            <div />
          </ActionIcon>
        </Dropdown>
      );
    },
  },
];
