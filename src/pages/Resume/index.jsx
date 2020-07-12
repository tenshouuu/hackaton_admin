import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { fetchGetResume } from 'api';
import {
  ResumeRoot, StyledContent, StyledCard, StyledSocials, TitleCard,
} from './styled';

const { Text, Title } = Typography;

function Resume() {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState({
    created_at: '',
    description: '',
    email: '',
    hh_link: '',
    id: null,
    linkedin_link: null,
    max_salary: null,
    min_salary: null,
    name: '',
    specialty: '',
    status: 'UNKNOWN',
  });

  useEffect(() => {
    if (id) {
      fetchGetResume(id)
        .catch(() => {
          history.push('/dashboard');
        })
        .then((resp = {}) => {
          const respData = resp.data;
          if (respData) {
            setData(respData);
          }
        });
    } else {
      history.push('/dashboard');
    }
  }, []);

  return (
    <ResumeRoot>
      <StyledContent>
        <Title level={2}>Подробная информация</Title>
        <Text>
          {data.description || ''}
        </Text>
      </StyledContent>
      <StyledCard title={(
        <TitleCard>
          <Avatar icon={<UserOutlined />} />
          {' '}
          <Title level={4}>
            {data.name || ''}
          </Title>
        </TitleCard>
        )}
      >
        <Title level={4}>Должность:</Title>
        <Text>{data.specialty || ''}</Text>
        <Title level={4}>Контакты:</Title>
        <StyledSocials contacts={data} />
        <Title level={4}>Средняя зарплата:</Title>
        <Text>-</Text>
        <Title level={4}>Ожидаемая зарплата:</Title>
        <Text>
          {`${(data.min_salary
            ? `от ${data.min_salary}р`
            : '')} ${(data.max_salary
            ? `до ${data.max_salary}р`
            : '')}`}
        </Text>
        <Title level={4}>Навыки:</Title>
        <Text>-</Text>
      </StyledCard>
    </ResumeRoot>
  );
}

export default React.memo(Resume);
