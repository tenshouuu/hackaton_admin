import React from 'react';
import {
  Typography, Form, Input, Popover, Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

import { SettingsRoot, StyledForm, Item, TooltipContent } from './styled';

const { Link } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: '${label} обязательно!',
  types: {
    email: '${label} неверно указана почта!',
    number: '${label} неверно указан номер!',
  },
};

function Settings() {
  const { email } = useSelector(state => state.user)
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <SettingsRoot>
      <Item>
        <h5>Почта аккаунта:</h5>
        <div>{email}</div>
      </Item>
      <Item>
        <h5>
          Почта сервиса:
          &nbsp;
          <Popover placement="rightTop" content={<TooltipContent>
            Почта на которую необходиимо настроить пересылку писем кандидатов.
            &nbsp;
            <Link href="https://support.google.com/mail/answer/10957?hl=ru" target="_blank" rel="noopener noreferrer">
              Подробнее
            </Link>
          </TooltipContent>} trigger="hover">
            <QuestionCircleOutlined />
          </Popover>
        </h5>
        <div>service@mail.com</div>
      </Item>
      <Item>
        <h5>Интеграция с сервисами:</h5>
        <div>
          <img src="/images/hh.png" width="32" style={{ borderRadius: '50%' }} />
          <img src="/images/linkedin.png" />
        </div>
      </Item>
      <StyledForm layout="vertical" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['user', 'email']} label="Ваша рабочая почта для пересылки резюме" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </StyledForm>
    </SettingsRoot>
  );
}

export default React.memo(Settings);
