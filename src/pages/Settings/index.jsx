import React, { useEffect, useCallback } from 'react';
import {
  Typography, Form, Input, Popover, Button, message,
} from 'antd';
import { QuestionCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import {
  useFetchGetSenderEmails,
  useFetchDeleteSenderEmail, useFetchAddSenderEmail,
} from 'store/user';
import {
  SettingsRoot, StyledForm, Item, TooltipContent, EmailItem, SocialWrapper,
} from './styled';

const { Link } = Typography;

const validateMessages = {
  required: 'Поле обязательно!',
  types: {
    email: 'Неверно указана почта!',
  },
};

function Settings() {
  const [form] = Form.useForm();
  const { email, serviceEmail, senderEmails } = useSelector((state) => state.user);
  const fetchGetSenderEmails = useFetchGetSenderEmails();
  const fetchDeleteSenderEmails = useFetchDeleteSenderEmail();
  const fetchAddSenderEmail = useFetchAddSenderEmail();

  useEffect(() => {
    fetchGetSenderEmails();
  }, []);

  const onDeleteLinkedEmail = useCallback((id) => {
    fetchDeleteSenderEmails(id);
  }, [fetchDeleteSenderEmails]);

  const onFinish = ({ email = '' }) => {
    if (email) {
      form.validateFields()
        .then(() => fetchAddSenderEmail(email))
        .then(() => form.resetFields())
        .catch((e) => message.error(e.message));
    }
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
          <Popover
            placement="right"
            content={(
              <TooltipContent>
                Почта на которую необходиимо настроить пересылку писем кандидатов.
                &nbsp;
                <Link href="https://support.google.com/mail/answer/10957?hl=ru" target="_blank" rel="noopener noreferrer">
                  Подробнее
                </Link>
              </TooltipContent>
          )}
            trigger="hover"
          >
            <QuestionCircleOutlined />
          </Popover>
        </h5>
        <div>{serviceEmail}</div>
      </Item>
      <Item>
        <h5>Интеграция с сервисами:</h5>
        <SocialWrapper>
          <img src="/images/hh.png" width="32" style={{ borderRadius: '50%' }} />
          <img src="/images/linkedin.png" />
        </SocialWrapper>
      </Item>
      <Item>
        <h5>Ваша рабочие почты для пересылки резюме:</h5>
        <div>
          {senderEmails.map(({ id, email: linkedEmail }) => (
            <EmailItem key={id} onClick={() => onDeleteLinkedEmail(id)}>
              <div>{linkedEmail}</div>
              <CloseOutlined />
            </EmailItem>
          ))}
        </div>
      </Item>
      <StyledForm
        form={form}
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name="email" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </StyledForm>
    </SettingsRoot>
  );
}

export default React.memo(Settings);
