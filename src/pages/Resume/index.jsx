import React from 'react';
import { Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import {
  ResumeRoot, StyledContent, StyledCard, StyledSocials, TitleCard,
} from './styled';

const { Text, Link, Title } = Typography;

function Resume() {
  return (
    <ResumeRoot>
      <StyledContent>
        <Title level={2}>Resume title</Title>
        <Text>
          To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end
          <br />
          <br />
          The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep
          <br />
          To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life--William Shakespeare
        </Text>
      </StyledContent>
      <StyledCard title={(
        <TitleCard>
          <Avatar icon={<UserOutlined />} />
          {' '}
          <Title level={4}>Владимир Путин</Title>
        </TitleCard>
        )}
      >
        <Title level={4}>Должность:</Title>
        <Text>Уборщик</Text>
        <Title level={4}>Контакты:</Title>
        <StyledSocials contacts={{
          email: 'example@mail.com',
          hh: 'https://hh.ru/',
        }}
        />
        <Title level={4}>Средняя зарплата:</Title>
        <Text>40 000р</Text>
        <Title level={4}>Ожидаемая зарплата:</Title>
        <Text>60 000р</Text>
        <Title level={4}>Навыки:</Title>
        <Text>Касса</Text>
      </StyledCard>
    </ResumeRoot>
  );
}

export default React.memo(Resume);
