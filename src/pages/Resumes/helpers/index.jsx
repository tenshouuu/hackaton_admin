import { Menu, Dropdown } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import Socials from 'components/Socials';
import { ActionIcon, StyledMenu } from '../styled';

export const columns = [
  {
    title: 'Имя',
    key: 'name',
    width: '20%',
    render: (_, { name }) => <a>{name}</a>,
  },
  {
    title: 'Специальность',
    dataIndex: 'specialty',
    key: 'specialty',
  },
  {
    title: 'Зарплата',
    key: 'price',
    render: (_, {
      max_salary,
      min_salary,
    }) => `${(min_salary ? `от ${min_salary}р` : '')} ${(max_salary ? `до ${max_salary}р` : '')}`,
  },
  {
    title: 'Контакты',
    key: 'contacts',
    render: (_, record) => <Socials contacts={record} />,
  },
  {
    title: 'Статус',
    key: 'status',
    render: (_, { status }) => (status === 'UNKNOWN' ? '-' : status),
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
          <Menu.Item key="1" style={{ pointerEvents: 'none', opacity: '0.5' }}>
            <a href="/">В избранное</a>
          </Menu.Item>
          <Menu.Item key="1" style={{ pointerEvents: 'none', opacity: '0.5' }}>
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
